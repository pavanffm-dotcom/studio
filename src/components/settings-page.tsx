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
  Wand2,
  LogOut,
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
import { useLanguage } from "@/lib/language"
import { useAuth } from "@/firebase"
import { signOut } from "firebase/auth"
import { Button } from "./ui/button"

const LanguageSelector = () => {
    const { language, setLanguage, t } = useLanguage();

    const handleLanguageChange = (value: string) => {
        setLanguage(value as 'english' | 'mandarin' | 'hindi' | 'spanish' | 'arabic' | 'french');
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

const ThemeSelector = () => {
    const [theme, setTheme] = React.useState('system');
    const { t } = useLanguage();


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
                    <Label htmlFor="theme-light" className="flex items-center gap-2"><Sun className="w-4 h-4"/> {t('settings.appearance.theme.light')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="flex items-center gap-2"><Moon className="w-4 h-4"/> {t('settings.appearance.theme.dark')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system" className="flex items-center gap-2"><Laptop className="w-4 h-4"/> {t('settings.appearance.theme.system')}</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

const FontSizeSelector = () => {
    const [fontSize, setFontSize] = React.useState('medium');
    const { t } = useLanguage();

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
                    <Label htmlFor="font-small">{t('settings.appearance.fontSize.small')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="font-medium" />
                    <Label htmlFor="font-medium">{t('settings.appearance.fontSize.medium')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="font-large" />
                    <Label htmlFor="font-large">{t('settings.appearance.fontSize.large')}</Label>
                </div>
            </RadioGroup>
        </div>
    )
}



export function SettingsPage() {
    const { t } = useLanguage();
    const auth = useAuth();
    const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);
    const [pushEnabled, setPushEnabled] = React.useState(false);
    const [emailEnabled, setEmailEnabled] = React.useState(true);
    const [muteAll, setMuteAll] = React.useState(false);

    const handleSignOut = () => {
        signOut(auth);
    };

    const settingsConfig = [
      {
        title: t('settings.account.title'),
        icon: User,
        options: [
          { label: t('settings.account.profile'), icon: User, component: <ProfileDetails /> },
          { label: t('settings.account.password'), icon: KeyRound, component: <ChangePassword /> },
          { label: t('settings.account.delete'), icon: Trash2, color: "text-red-500", component: <DeleteAccount />, isDialog: true },
        ],
      },
      {
        title: t('settings.privacy.title'),
        icon: Shield,
        options: [
          { label: t('settings.privacy.permissions'), icon: Shield, component: <DataPermissions /> },
          { label: t('settings.privacy.logs'), icon: FileClock, component: <ActivityLogs /> },
          { label: t('settings.privacy.analytics'), icon: BarChart3, control: "switch" },
          { label: t('settings.privacy.twoFactor'), icon: Fingerprint, component: <TwoFactorAuth /> },
        ],
      },
      {
        title: t('settings.notifications.title'),
        icon: Bell,
        options: [
          { label: t('settings.notifications.push'), icon: Bell, control: "switch" },
          { label: t('settings.notifications.email'), icon: Mail, control: "switch", checked: true },
          { label: t('settings.notifications.category'), icon: ListFilter, component: <p className="px-2 text-sm text-muted-foreground">{t('settings.notifications.categoryDescription')}</p> },
          { label: t('settings.notifications.mute'), icon: BellOff, control: "switch" },
        ],
      },
      {
        title: t('settings.appearance.title'),
        icon: Palette,
        options: [
          { label: t('settings.appearance.theme.title'), icon: Sun, component: 'theme' },
          { label: t('settings.appearance.fontSize.title'), icon: Type, component: 'font' },
        ],
      },
      {
        title: t('settings.language.title'),
        icon: Languages,
        options: [
          { label: t('settings.language.app'), icon: Globe, component: 'language' },
          { label: t('settings.language.description'), icon: Globe, value: "English (US)" },
        ],
      },
      {
        title: t('settings.preferences.title'),
        icon: Settings,
        options: [
          { label: t('settings.preferences.defaultCategories'), icon: LayoutGrid },
          { label: t('settings.preferences.saveFavourites'), icon: Heart, control: "switch", checked: true },
          { label: t('settings.preferences.autoUpdate'), icon: RefreshCw, control: "switch", checked: true },
          { label: t('settings.preferences.download'), icon: Download },
        ],
      },
      {
        title: t('settings.billing.title'),
        icon: CreditCard,
        options: [
          { label: t('settings.billing.status'), icon: Star, value: "Pro" },
          { label: t('settings.billing.plans'), icon: TrendingUp },
          { label: t('settings.billing.history'), icon: History },
        ],
      },
      {
        title: t('settings.sync.title'),
        icon: Cloud,
        options: [
          { label: t('settings.sync.cloud'), icon: CloudCog, control: "switch", checked: true },
          { label: t('settings.sync.backup'), icon: FileText },
          { label: t('settings.sync.restore'), icon: RefreshCw },
        ],
      },
      {
        title: t('settings.support.title'),
        icon: HelpCircle,
        options: [
          { label: t('settings.support.faq'), icon: FileQuestion },
          { label: t('settings.support.contact'), icon: MessageSquare },
          { label: t('settings.support.report'), icon: Info },
          { label: t('settings.support.tutorials'), icon: BookOpen },
        ],
      },
      {
        title: t('settings.about.title'),
        icon: Info,
        options: [
          { label: t('settings.about.version'), icon: GitBranch, value: "1.0.0" },
          { label: t('settings.about.terms'), icon: FileText },
          { label: t('settings.about.privacy'), icon: Shield },
          { label: t('settings.about.developer'), icon: User },
        ],
      },
    ]

    const handleToggle = (label: string, checked: boolean) => {
        switch (label) {
            case t('settings.privacy.analytics'):
              setAnalyticsEnabled(checked);
              console.log(`App analytics ${checked ? 'enabled' : 'disabled'}`);
              break;
            case t('settings.notifications.push'):
              setPushEnabled(checked);
              console.log(`Push notifications ${checked ? 'enabled' : 'disabled'}`);
              break;
            case t('settings.notifications.email'):
              setEmailEnabled(checked);
              console.log(`Email alerts ${checked ? 'enabled' : 'disabled'}`);
              break;
            case t('settings.notifications.mute'):
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
                    case t('settings.privacy.analytics'):
                        isChecked = analyticsEnabled;
                        break;
                    case t('settings.notifications.push'):
                        isChecked = pushEnabled && !muteAll;
                        break;
                    case t('settings.notifications.email'):
                        isChecked = emailEnabled && !muteAll;
                        break;
                    case t('settings.notifications.mute'):
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
        <div className="mt-8">
            <Button variant="outline" className="w-full bg-card/80" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
        </div>
    </div>
  )
}

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
