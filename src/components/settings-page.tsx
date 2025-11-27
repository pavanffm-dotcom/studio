"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  User,
  Shield,
  Bell,
  Palette,
  Languages,
  Settings,
  CreditCard,
  Cloud,
  HelpCircle,
  Info,
  ChevronRight,
  KeyRound,
  Trash2,
  FileClock,
  BarChart3,
  Fingerprint,
  Mail,
  ListFilter,
  BellOff,
  Sun,
  Laptop,
  Type,
  Moon,
  Globe,
  Heart,
  RefreshCw,
  Download,
  Star,
  History,
  CloudCog,
  FileText,
  MessageSquare,
  BookOpen,
  GitBranch,
  FileQuestion,
  LayoutGrid,
  TrendingUp,
} from "lucide-react"
import { Switch } from "./ui/switch"
import { Separator } from "./ui/separator"
import { ProfileDetails } from "./profile-details"
import { ChangePassword } from "./change-password"
import { DeleteAccount } from "./delete-account"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { DataPermissions } from "./data-permissions"
import { ActivityLogs } from "./activity-logs"
import { TwoFactorAuth } from "./two-factor-auth"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const settingsConfig = [
  {
    title: "Account Settings",
    icon: User,
    options: [
      { label: "Profile details", icon: User, component: <ProfileDetails /> },
      { label: "Password change", icon: KeyRound, component: <ChangePassword /> },
      { label: "Delete account", icon: Trash2, color: "text-red-500", component: <DeleteAccount />, isDialog: true },
    ],
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    options: [
      { label: "Data permissions", icon: Shield, component: <DataPermissions /> },
      { label: "Activity logs", icon: FileClock, component: <ActivityLogs /> },
      { label: "App analytics", icon: BarChart3, control: "switch" },
      { label: "Two-factor authentication", icon: Fingerprint, component: <TwoFactorAuth /> },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    options: [
      { label: "Push notifications", icon: Bell, control: "switch" },
      { label: "Email alerts", icon: Mail, control: "switch", checked: true },
      { label: "Category-based notifications", icon: ListFilter, component: <p className="px-2 text-sm text-muted-foreground">Choose which tool categories you want to receive notifications for. (UI not implemented yet)</p> },
      { label: "Mute all", icon: BellOff, control: "switch" },
    ],
  },
  {
    title: "Appearance / Theme",
    icon: Palette,
    options: [
      { label: "Theme", icon: Sun, component: 'theme' },
      { label: "Font size", icon: Type, component: 'font' },
    ],
  },
  {
    title: "Language Settings",
    icon: Languages,
    options: [
      { label: "App language", icon: Globe, component: 'language' },
      { label: "AI tool description language", icon: Globe, value: "English (US)" },
    ],
  },
  {
    title: "App Preferences",
    icon: Settings,
    options: [
      { label: "Default categories", icon: LayoutGrid },
      { label: "Save favourite tools", icon: Heart, control: "switch", checked: true },
      { label: "Auto-update tool listings", icon: RefreshCw, control: "switch", checked: true },
      { label: "Download settings", icon: Download },
    ],
  },
  {
    title: "Subscription / Billing",
    icon: CreditCard,
    options: [
      { label: "Subscription status", icon: Star, value: "Pro" },
      { label: "Upgrade / Downgrade plans", icon: TrendingUp },
      { label: "Payment history", icon: History },
    ],
  },
  {
    title: "Backup & Sync",
    icon: Cloud,
    options: [
      { label: "Cloud sync", icon: CloudCog, control: "switch", checked: true },
      { label: "Data backup", icon: FileText },
      { label: "Restore data", icon: RefreshCw },
    ],
  },
  {
    title: "Support & Help",
    icon: HelpCircle,
    options: [
      { label: "FAQs", icon: FileQuestion },
      { label: "Contact Support", icon: MessageSquare },
      { label: "Report a problem", icon: Info },
      { label: "App tutorials", icon: BookOpen },
    ],
  },
  {
    title: "About App",
    icon: Info,
    options: [
      { label: "App version", icon: GitBranch, value: "1.0.0" },
      { label: "Terms & Conditions", icon: FileText },
      { label: "Privacy Policy", icon: Shield },
      { label: "Developer info", icon: User },
    ],
  },
]

const SettingItem = ({ option, onToggle, isChecked, children }: { option: any; onToggle?: (checked: boolean) => void; isChecked?: boolean, children?: React.ReactNode }) => (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <option.icon className={`w-6 h-6 text-muted-foreground ${option.color || ""}`} />
        <span className={`text-base ${option.color || "text-foreground"}`}>{option.label}</span>
      </div>
      <div className="flex items-center gap-3">
        {option.value && <span className="text-base text-muted-foreground">{option.value}</span>}
        {option.control === "switch" ? (
          <Switch defaultChecked={option.checked} onCheckedChange={onToggle} checked={isChecked} />
        ) : (
          !option.component && !children && <ChevronRight className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </div>
  );

const ThemeSelector = () => {
    const [theme, setTheme] = React.useState('system');

    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);
    
    return (
        <div className="p-2 space-y-2">
            <RadioGroup defaultValue="system" onValueChange={setTheme}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light" className="flex items-center gap-2"><Sun className="w-4 h-4"/> Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="flex items-center gap-2"><Moon className="w-4 h-4"/> Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system" className="flex items-center gap-2"><Laptop className="w-4 h-4"/> System</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

const FontSizeSelector = () => {
    const [fontSize, setFontSize] = React.useState('medium');

    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
        root.classList.add(`font-size-${fontSize}`);
    }, [fontSize]);

    return (
        <div className="p-2 space-y-2">
            <RadioGroup defaultValue="medium" onValueChange={setFontSize}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="font-small" />
                    <Label htmlFor="font-small">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="font-medium" />
                    <Label htmlFor="font-medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="font-large" />
                    <Label htmlFor="font-large">Large</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

const LanguageSelector = () => {
    const [language, setLanguage] = React.useState('english');

    // In a real app, you'd use a library like i18next to change the language.
    // For this demo, we'll just log the change.
    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        console.log(`App language changed to: ${value}`);
    }
    
    return (
        <div className="p-2">
            <Select onValueChange={handleLanguageChange} defaultValue={language}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="mandarin">Mandarin Chinese</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}


export function SettingsPage() {
    const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);
    const [pushEnabled, setPushEnabled] = React.useState(false);
    const [emailEnabled, setEmailEnabled] = React.useState(true);
    const [muteAll, setMuteAll] = React.useState(false);

    const handleToggle = (label: string, checked: boolean) => {
        switch (label) {
            case 'App analytics':
              setAnalyticsEnabled(checked);
              console.log(`App analytics ${checked ? 'enabled' : 'disabled'}`);
              break;
            case 'Push notifications':
              setPushEnabled(checked);
              console.log(`Push notifications ${checked ? 'enabled' : 'disabled'}`);
              break;
            case 'Email alerts':
              setEmailEnabled(checked);
              console.log(`Email alerts ${checked ? 'enabled' : 'disabled'}`);
              break;
            case 'Mute all':
              setMuteAll(checked);
              if (checked) {
                setPushEnabled(false);
                setEmailEnabled(false);
              }
              console.log(`Mute all ${checked ? 'enabled' : 'disabled'}`);
              break;
            default:
              break;
          }
      };

  return (
    <div className="p-4">
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {settingsConfig.map((category, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b-0 mb-3 bg-card/80 backdrop-blur-sm rounded-3xl px-4 soft-shadow">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lavender to-soft-blue flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-semibold text-lg text-foreground">{category.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-1">
              {category.options.map((option, i) => {
                let componentToRender;
                if(option.component === 'theme') {
                    componentToRender = <ThemeSelector />;
                } else if (option.component === 'font') {
                    componentToRender = <FontSizeSelector />;
                } else if (option.component === 'language') {
                    componentToRender = <LanguageSelector />;
                } else {
                    componentToRender = option.component;
                }

                const isSwitch = option.control === 'switch';
                let isChecked;
                switch (option.label) {
                    case 'App analytics':
                        isChecked = analyticsEnabled;
                        break;
                    case 'Push notifications':
                        isChecked = pushEnabled && !muteAll;
                        break;
                    case 'Email alerts':
                        isChecked = emailEnabled && !muteAll;
                        break;
                    case 'Mute all':
                        isChecked = muteAll;
                        break;
                    default:
                        isChecked = option.checked;
                        break;
                }

                return (
                    <div key={i}>
                    {option.isDialog ? (
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="w-full">
                            <SettingItem option={option} />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>{option.label}</AlertDialogTitle>
                            </AlertDialogHeader>
                            {componentToRender}
                        </AlertDialogContent>
                        </AlertDialog>
                    ) : componentToRender ? (
                        <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`option-${i}`} className="border-b-0">
                            <AccordionTrigger className="hover:no-underline">
                                <SettingItem option={option} />
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                                {componentToRender}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    ) : (
                        <>
                        <SettingItem 
                            option={option} 
                            isChecked={isSwitch ? isChecked : undefined}
                            onToggle={isSwitch ? (checked) => handleToggle(option.label, checked) : undefined}
                        />
                        {i < category.options.length - 1 && <Separator className="bg-border/50"/>}
                        </>
                    )}
                    </div>
              )})}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
