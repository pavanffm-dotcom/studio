'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Sparkles, Loader2 } from 'lucide-react';
import { getCategorySuggestionAction } from '@/app/actions';
import { CATEGORIES, Category } from '@/lib/types';


const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Tool name must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  link: z.string().url({ message: 'Please enter a valid URL.' }),
  category: z.enum(CATEGORIES, {
    errorMap: () => ({ message: "Please select a valid category." }),
  }),
});

export function AddToolDialog() {
  const [open, setOpen] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      link: '',
    },
  });

  const handleSuggestCategory = async () => {
    const description = form.getValues('description');
    if (description.length < 10) {
      form.setError('description', {
        type: 'manual',
        message: 'Please enter at least 10 characters to get a suggestion.',
      });
      return;
    }
    
    setIsSuggesting(true);
    const result = await getCategorySuggestionAction({ description });
    setIsSuggesting(false);

    if ('category' in result && result.category) {
        form.setValue('category', result.category as Category, { shouldValidate: true });
        toast({
          title: 'Category Suggested',
          description: `We've suggested the "${result.category}" category for you.`,
        });
    } else if ('error' in result) {
      toast({
        variant: 'destructive',
        title: 'Suggestion Failed',
        description: result.error,
      });
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Tool Submitted!',
      description: `"${values.name}" has been added to the queue for review.`,
    });
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Tool
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new AI Tool</DialogTitle>
          <DialogDescription>
            Contribute to the largest directory of AI tools. Fill out the form
            below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tool Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Pixel Perfect" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what the tool does..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <div className="flex gap-2">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                           <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleSuggestCategory}
                      disabled={isSuggesting}
                      aria-label="Suggest Category"
                    >
                      {isSuggesting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="h-4 w-4 text-accent" />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit for Review</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
