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
  Moon,
  Laptop,
  Type,
  Paintbrush,
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

const settingsConfig = [
  {
    title: "Account Settings",
    icon: User,
    options: [
      { label: "Profile details", icon: User },
      { label: "Email / phone update", icon: Mail },
      { label: "Password change", icon: KeyRound },
      { label: "Delete account", icon: Trash2, color: "text-red-500" },
    ],
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    options: [
      { label: "Data permissions", icon: Shield },
      { label: "Activity logs", icon: FileClock },
      { label: "App analytics", icon: BarChart3, control: "switch" },
      { label: "Two-factor authentication", icon: Fingerprint },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    options: [
      { label: "Push notifications", icon: Bell, control: "switch" },
      { label: "Email alerts", icon: Mail, control: "switch", checked: true },
      { label: "Category-based notifications", icon: ListFilter },
      { label: "Mute all", icon: BellOff, control: "switch" },
    ],
  },
  {
    title: "Appearance / Theme",
    icon: Palette,
    options: [
      { label: "Theme", icon: Sun, value: "System" },
      { label: "Font size", icon: Type, value: "Medium" },
      { label: "Accent color", icon: Paintbrush },
    ],
  },
  {
    title: "Language Settings",
    icon: Languages,
    options: [
      { label: "App language", icon: Globe, value: "English" },
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

const SettingItem = ({ option }: { option: any }) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <option.icon className={`w-6 h-6 text-muted-foreground ${option.color || ""}`} />
      <span className={`text-base ${option.color || "text-foreground"}`}>{option.label}</span>
    </div>
    <div className="flex items-center gap-3">
      {option.value && <span className="text-base text-muted-foreground">{option.value}</span>}
      {option.control === "switch" ? (
        <Switch defaultChecked={option.checked} />
      ) : (
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      )}
    </div>
  </div>
)

export function SettingsPage() {
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
              {category.options.map((option, i) => (
                <React.Fragment key={i}>
                  <SettingItem option={option} />
                  {i < category.options.length - 1 && <Separator className="bg-border/50"/>}
                </React.Fragment>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
