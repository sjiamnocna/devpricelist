import { ClientModifier, LanguageModifier, ActivityModifier, ClientBehaviorModifier, DocumentationModifier, ComplexityModifier, UrgencyModifier, WorkingHoursModifier, CommunicationModifier, TechDebtModifier, LocationModifier, FormModifier, TeamModifier, MiddlemanModifier, PaymentModifier } from "./data/modifiers";
import { RateCalculator } from "./data/RateCalculator";

export const DefaultCalculatorRun = () => {
    // Your hour rate in Europe is 
    const RC = new RateCalculator(20);

    // Add all defined modifiers to the rate calculator
    RC.addModifier('client', ClientModifier.Startup); // Client is a startup
    RC.addModifier('client', ClientModifier.Government); // Passive client
    RC.addModifier('language', LanguageModifier.TypeScript);
    RC.addModifier('language', LanguageModifier.Go);
    RC.addModifier('activity', ActivityModifier.Development);
    RC.addModifier('activity', ActivityModifier.Testing);
    RC.addModifier('activity', ActivityModifier.Documentation);
    RC.addModifier('clientBehavior', ClientBehaviorModifier.Normal);
    RC.addModifier('documentation', DocumentationModifier.Excellent);
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
    console.log(`Hour rate: ${rate}€`); // Should print the calculated rate based on the base rate and applied modifiers
}

DefaultCalculatorRun();