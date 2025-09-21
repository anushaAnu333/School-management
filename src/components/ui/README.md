# Design System Components

This directory contains reusable UI components following a consistent design pattern.

## Component Usage Patterns

### 1. Button Component
```tsx
import { Button } from "@/components/ui"

// Primary button (default)
<Button>Click me</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>

// Loading state
<Button isLoading>Loading...</Button>
```

### 2. TextField Component
```tsx
import { TextField } from "@/components/ui"
import { Mail } from "lucide-react"

// Basic text field
<TextField label="Email" placeholder="Enter email" />

// With icon
<TextField 
  label="Email" 
  placeholder="Enter email"
  leftIcon={<Mail className="w-4 h-4" />}
/>

// With error
<TextField 
  label="Email" 
  error="Email is required"
  placeholder="Enter email"
/>

// Different sizes
<TextField size="sm" label="Small" />
<TextField size="md" label="Medium (default)" />
<TextField size="lg" label="Large" />
```

### 3. Select Component
```tsx
import { Select } from "@/components/ui"
import { Shield } from "lucide-react"

const options = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" }
]

<Select 
  label="Role" 
  options={options}
  leftIcon={<Shield className="w-4 h-4" />}
/>
```

### 4. Typography Components
```tsx
import { Heading, Text } from "@/components/ui"

// Headings
<Heading level={1}>Main Title</Heading>
<Heading level={2} variant="muted">Subtitle</Heading>
<Heading level={3} variant="accent">Accent Heading</Heading>

// Text
<Text>Default text</Text>
<Text variant="muted">Muted text</Text>
<Text variant="small">Small text</Text>
<Text variant="large">Large text</Text>
<Text weight="bold">Bold text</Text>
```

### 5. Card Component
```tsx
import { Card } from "@/components/ui"

// Default card
<Card>Content</Card>

// Outlined card
<Card variant="outlined">Content</Card>

// Elevated card
<Card variant="elevated">Content</Card>

// Different padding
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding (default)</Card>
<Card padding="lg">Large padding</Card>
```

## Design Tokens

### Colors
- **Primary**: Green (`green-600`, `green-700`)
- **Secondary**: Gray (`gray-100`, `gray-200`)
- **Text**: Gray (`gray-700`, `gray-900`)
- **Error**: Red (`red-600`, `red-300`)
- **Muted**: Gray (`gray-500`, `gray-600`)

### Sizes
- **Small**: `h-8`, `text-sm`
- **Medium**: `h-10`, `text-sm` (default)
- **Large**: `h-12`, `text-base`

### Spacing
- **Small**: `p-4`
- **Medium**: `p-6` (default)
- **Large**: `p-8`

## When to Use Each Component

### Button
- Use for actions (submit, cancel, save)
- Choose variant based on importance (primary for main actions)
- Use loading state for async operations

### TextField
- Use for text input, email, password, etc.
- Add icons for better UX
- Show errors inline
- Use appropriate size for context

### Select
- Use for dropdown selections
- Provide clear options
- Use icons for better recognition

### Typography
- Use consistent heading hierarchy
- Choose appropriate text variants
- Maintain readability

### Card
- Use for grouping related content
- Choose variant based on importance
- Use appropriate padding for content density

