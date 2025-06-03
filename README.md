# Pricelistx

A flexible rate calculation utility for software projects, supporting a wide range of modifiers (language, activity, customer type, urgency, and more) to help you determine fair and transparent pricing.

This is mostly fun project, so enjoy playing with the prices :)

## Features

- TypeScript-based, type-safe modifier system
- Using Typescript `const enum` and generics to ensure type safety and performance
- Easily extendable with custom modifiers
- Simple API for adding/removing modifiers and calculating rates

## Usage

1. Define your base hourly rate and initial modifiers.
2. Use the `RateCalculator` class to manage and update modifiers.
3. Retrieve the current rate after all modifiers are applied.

## Example

```typescript
import { ClientModifier, LanguageModifier, ActivityModifier, ClientBehaviorModifier, DocumentationModifier, ComplexityModifier, UrgencyModifier, WorkingHoursModifier, CommunicationModifier, TechDebtModifier, LocationModifier, FormModifier, TeamModifier, MiddlemanModifier, PaymentModifier } from "./data/modifiers";
import { RateCalculator } from "./data/RateCalculator";

// Basic hour rate in Europe is 
const RC = new RateCalculator(30);

// Add all defined modifiers to the rate calculator
RC.addModifier('client', ClientModifier.Startup); // Passive client
RC.addModifier('language', LanguageModifier.TypeScript);
RC.addModifier('activity', ActivityModifier.Development);
RC.addModifier('clientBehavior', ClientBehaviorModifier.TellsMeHowToDoMyJob);
RC.addModifier('documentation', DocumentationModifier.None);
RC.addModifier('complexity', ComplexityModifier.Medium);
RC.addModifier('urgency', UrgencyModifier.Relaxed);
RC.addModifier('hours', WorkingHoursModifier.Workday);
RC.addModifier('communication', CommunicationModifier.WeeklyCalls);
RC.addModifier('techdebt', TechDebtModifier.Greenfield);
RC.addModifier('location', LocationModifier.Europe);
RC.addModifier('form', FormModifier.Hybrid);
RC.addModifier('team', TeamModifier.Small);
RC.addModifier('middleman', MiddlemanModifier.Agency);
RC.addModifier('payment', PaymentModifier.Hourly);

// Get price and print it
const rate = Math.ceil(RC.currentRate); // Calculate the current rate based on the base rate and applied modifiers
```

> Bun is used as the default runner, but TS compiler can be used as well.

```shell
bun run src/index.ts
```

## Discussion
Please feel free to **discuss on modifier values** as it applies to your job performance, health or other factors that may affect your rate.
The values are subjective and can vary widely based on personal experience and market conditions.

## DONATE
If you find this project useful, please consider supporting its development:

- **PayPal:** [paypal.com/donate](https://www.paypal.com/donate/?business=65SS8NS48FPFQ&no_recurring=0&item_name=Thanks+for+supporting+me+in+developlent&currency_code=CZK)
- **Buy Me a Coffee:** [buymeacoffee.com/sjiamnocna](https://buymeacoffee.com/sjiamnocna)

Your support helps keep this project maintained and free for everyone!
