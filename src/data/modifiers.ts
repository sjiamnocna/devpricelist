// Language modifiers
export const enum LanguageModifier {
    Go = 0.9,
    TypeScript = 1,
    JavaScript = 1.01, // Vanilla JS
    Rust = 1.01,
    C = 1.02,
    Cpp = 1.03,
    PHP = 1.05,
    Java = 1.05,
    CSharp = 1.06,
    Python = 1.08, // Python is bad designed, slow, language lock syntax and has a lot of dependencies but is popular due to academic world
    Ruby = 1.08,
}

// Activity modifiers
export const enum ActivityModifier {
    Testing = 1,
    Development = 1.1,
    Design = 1.2,
    Documentation = 1.3,
}

// Control modifiers
export const enum ClientModifier {
    Charity = 0.05,
    Nonprofit = 0.07,
    Opensource = 0.09,
    Ownwork = 1,
    Startup = 1.01, // Startups are usually fast-paced and brings something new
    Commercial = 1.02,
    Corporate = 1.03,
    Government = 1.05, // Government projects are usually slow, bureaucratic, and have a lot of bad code
}

// Client behavior modifiers
export const enum ClientBehaviorModifier {
    Normal = 1,
    Passive = 1.02,
    TellsMeHowToDoMyJob = 1.05,
    Aggressive = 1.07,
}

// Communication modifiers
export const enum CommunicationModifier {
    Email = 1,
    WeeklyCalls = 1.02,
    DailyCalls = 1.03,
    SlackMicromanage = 1.05,
}

// Complexity modifiers
export const enum ComplexityModifier {
    Simple = 1,
    Medium = 1.02,
    Complex = 1.04,
}

// Urgency modifiers
export const enum UrgencyModifier {
    Relaxed = 1,
    Normal = 1.01,
    TightDeadline = 1.05,
    Yesterday = 1.5,
}

// Working hours modifiers
export const enum WorkingHoursModifier {
    Workday = 1,
    Evening = 1.01,
    Weekend = 1.02,
    Holiday = 1.05,
}

// Tech debt modifiers
export const enum TechDebtModifier {
    Greenfield = 1,
    Spaghetti = 1.02,
    Legacy = 1.04,
    Abandonware = 3,
}

// Location modifiers
export const enum LocationModifier {
    Local = 1,
    Europe = 1.1,
    USA = 1.4,
    Unknown = 2, // highly suspicious
}

// Form modifiers
export const enum FormModifier {
    Onsite = 1.3,
    Hybrid = 1.1,
    Remote = 1,
}

// Documentation modifiers
export const enum DocumentationModifier {
    Excellent = 1,
    Good = 1.01,
    Minimal = 1.04,
    None = 1.08,
}

// Team modifiers
export const enum TeamModifier {
    Solo = 1,
    Small = 1.01,
    Medium = 1.02,
    Large = 1.05,
}

// Middleman modifiers
export const enum MiddlemanModifier {
    Direct = 1,
    Agency = 1.02,
    Recruiter = 1.02,
    Upwork = 1.05, // Upwork is a platform that takes a cut, so it increases the rate
}

// Payment modifiers
export const enum PaymentModifier {
    Fixed = 1,
    Hourly = 1.02,
    Retainer = 1.05, // Retainer is a long-term commitment, so it increases the rate for blocking time
    Milestone = 1.08, // Gives no guarantee of payment, so it increases the rate
}

export type T_modifiers = {
    language: LanguageModifier;
    activity: ActivityModifier;
    client: ClientModifier;
    clientBehavior: ClientBehaviorModifier;
    documentation: DocumentationModifier;
    complexity: ComplexityModifier;
    urgency: UrgencyModifier;
    hours: WorkingHoursModifier;
    communication: CommunicationModifier;
    techdebt: TechDebtModifier;
    location: LocationModifier;
    form: FormModifier;
    team: TeamModifier;
    middleman: MiddlemanModifier;
    payment: PaymentModifier;
};

/**
 * ModifierList interface defines the structure for holding all modifiers used in the rate calculation.
 */
export type ModifierList = {
    [K in keyof T_modifiers]: (T_modifiers[K] | Number);
};

/**
 * ModifierListArrays type defines the structure for holding all ModifierList fields as arrays of their type.
 */
export type ModifierListArrays = {
    [K in keyof ModifierList]: Array<ModifierList[K]>;
} & {
    custom?: Record<string, number>;
};

/**
 * Type for all possible modifier category keys in the ModifierList.
 */
export type ModifierCategory = keyof ModifierList;