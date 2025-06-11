/**
 * Language modifiers affect the base rate based on the programming language used.
 * Different languages have different complexity levels and market rates.
 */
export const enum LanguageModifier {
    /**
     * Go - A simple and efficient language
     */
    Go = 0.9,
    /**
     * TypeScript - A typed superset of JavaScript
     */
    TypeScript = 1,
    /**
     * JavaScript - The standard web programming language
     */
    JavaScript = 1.02,
    /**
     * Rust - A systems programming language focused on safety and performance
     */
    Rust = 1.02,
    /**
     * C - The classic systems programming language
     */
    C = 1.02,
    /**
     * C++ - An extension of C with object-oriented features
     */
    Cpp = 1.03,
    /**
     * PHP - A popular language for web development
     */
    PHP = 1.05,
    /**
     * Java - A widely-used enterprise programming language
     */
    Java = 1.05,
    /**
     * C# - Microsoft's modern programming language
     */
    CSharp = 1.06,
    /**
     * Python - A beginner-friendly language popular in data science and academia
     */
    Python = 1.08,
    /**
     * Ruby - A dynamic language known for its elegant syntax
     */
    Ruby = 1.08,
}

/**
 * Activity modifiers adjust the rate based on the type of work being performed.
 * Different activities require different levels of expertise and effort.
 */
export const enum ActivityModifier {
    /**
     * Development - Writing new code and features
     */
    Development = 1,
    /**
     * Design - Planning and designing the system
     * 
     * Design is a bit more complex than development. But can be creative and fun.
     */
    Design = 1.03,
    /**
     * Testing - Writing and running tests
     * 
     * Testing is a bit more complex than development. You need to understand and cover all edge cases.
     */
    Testing = 1.05,
    /**
     * Documentation - Writing and maintaining documentation
     * 
     * Means underdeveloped codebase so quite complex and mostly boring.
     */
    Documentation = 1.08,
}

/**
 * Client modifiers reflect the type of organization you're working with.
 * Different client types have different budget levels and working styles.
 */
export const enum ClientModifier {
    /**
     * Charity - Working for charitable organizations
     */
    Charity = 0.5,
    /**
     * Nonprofit - Working with non-profit organizations that typically have limited budgets
     */
    Nonprofit = 0.8,
    /**
     * Open Source - Contributing to open source projects
     */
    Opensource = 0.95,
    /**
     * Owner - Working directly with project owners who have clear vision and budget
     */
    Owner = 1,
    /**
     * Startup - Working with fast-moving startup companies
     */
    Startup = 1.01,
    /**
     * Commercial - Working with regular businesses
     */
    Commercial = 1.05,
    /**
     * Corporate - Working with large companies that may have complex processes
     */
    Corporate = 1.15,
    /**
     * Government - Working with government agencies that have specific requirements
     */
    Government = 1.2,
}

/**
 * Client behavior modifiers account for how the client interacts with you.
 * These modifiers reflect the additional effort required based on client communication style.
 */
export const enum ClientBehaviorModifier {
    /**
     * Normal - Standard client interaction
     */
    Normal = 1,
    /**
     * Passive - Client is less involved in the process
     */
    Passive = 1.02,
    /**
     * TellsMeHowToDoMyJob - Client frequently provides technical direction
     */
    TellsMeHowToDoMyJob = 1.05,
    /**
     * Aggressive - Client is demanding and high-pressure
     */
    Aggressive = 1.07,
}

/**
 * Communication modifiers reflect how often and through what channels you need to communicate.
 * More frequent or complex communication patterns require additional time and effort.
 */
export const enum CommunicationModifier {
    /**
     * Email - Communication via email
     */
    Email = 1,
    /**
     * Weekly Calls - Regular weekly meetings
     */
    WeeklyCalls = 1.02,
    /**
     * Daily Calls - Daily check-in meetings
     */
    DailyCalls = 1.03,
    /**
     * Slack Micromanagement - Frequent Slack messages and updates
     */
    SlackMicromanage = 1.05,
}

/**
 * Complexity modifiers account for the technical difficulty of the work.
 * More complex tasks require more expertise and time to complete.
 */
export const enum ComplexityModifier {
    /**
     * Simple - Straightforward tasks with clear requirements
     */
    Simple = 1,
    /**
     * Medium - Tasks with some complexity but manageable
     */
    Medium = 1.02,
    /**
     * Complex - Challenging tasks requiring significant effort
     */
    Complex = 1.04,
}

/**
 * Urgency modifiers reflect how quickly the work needs to be completed.
 * Tighter deadlines require more focused effort and may impact other commitments.
 */
export const enum UrgencyModifier {
    /**
     * Relaxed - No strict deadlines
     */
    Relaxed = 1,
    /**
     * Normal - Standard project timeline
     */
    Normal = 1.01,
    /**
     * Tight Deadline - Project needs to be completed quickly
     */
    TightDeadline = 1.05,
    /**
     * Yesterday - Extremely urgent, needed immediately
     */
    Yesterday = 1.5,
}

/**
 * Working hours modifiers account for when the work needs to be performed.
 * Non-standard hours may impact work-life balance and require additional compensation.
 */
export const enum WorkingHoursModifier {
    /**
     * Workday - Standard business hours
     */
    Workday = 1,
    /**
     * Evening - Working after regular business hours
     */
    Evening = 1.01,
    /**
     * Weekend - Working on weekends
     */
    Weekend = 1.02,
    /**
     * Holiday - Working on holidays
     */
    Holiday = 1.05,
}

/**
 * Tech debt modifiers reflect the state of the existing codebase.
 * Working with legacy or poorly maintained code requires additional effort and risk.
 */
export const enum TechDebtModifier {
    /**
     * Greenfield - Starting a new project from scratch
     */
    Greenfield = 1,
    /**
     * Spaghetti - Working with poorly organized code
     */
    Spaghetti = 1.02,
    /**
     * Legacy - Working with older, outdated systems
     */
    Legacy = 1.04,
    /**
     * Abandonware - Working with neglected or abandoned code
     */
    Abandonware = 3,
}

/**
 * Location modifiers account for the client's geographical location.
 * Different regions have different market rates and working conditions.
 */
export const enum LocationModifier {
    /**
     * Local - Working with nearby clients in Czech
     */
    Czech = 1,
    /**
     * Europe - Working with European clients
     */
    Europe = 1.07,
    /**
     * USA - Working with US-based clients usually means higher rates
     */
    USA = 1.25,
    /**
     * Unknown - Working with clients of uncertain location
     */
    Unknown = 2,
}

/**
 * Form modifiers reflect how the work is performed (onsite, remote, or hybrid).
 * Different work arrangements have different costs and flexibility levels.
 */
export const enum FormModifier {
    /**
     * Onsite - Working at the client's location
     */
    Onsite = 1.15,
    /**
     * Remote - Working from your own location
     */
    Remote = 1.1,
    /**
     * Hybrid - Mix of onsite and remote work
     */
    Hybrid = 1,
}

/**
 * Documentation modifiers reflect the quality and availability of project documentation.
 * Poor documentation requires additional time to understand the system.
 */
export const enum DocumentationModifier {
    /**
     * Excellent - Well-documented and easy to understand
     */
    Excellent = 1,
    /**
     * Good - Documentation exists but could be improved
     */
    Good = 1.02,
    /**
     * Fair - Basic documentation available
     */
    Fair = 1.05,
    /**
     * Minimal - Very limited documentation
     */
    Minimal = 1.08,
    /**
     * None - No documentation available
     */
    None = 1.2,
}

/**
 * Team modifiers account for the size of the team you're working with.
 * Larger teams require more coordination and communication effort.
 */
export const enum TeamModifier {
    /**
     * Solo - Working independently
     */
    Solo = 1,
    /**
     * Small - Working with 2-5 team members
     */
    Small = 1.01,
    /**
     * Medium - Working with 6-15 team members
     */
    Medium = 1.02,
    /**
     * Large - Working with more than 15 team members
     */
    Large = 1.05,
}

/**
 * Middleman modifiers reflect how the work is sourced and managed.
 * Different intermediaries may add complexity or take a portion of the rate.
 */
export const enum MiddlemanModifier {
    /**
     * Direct - Working directly with the client
     */
    Direct = 1,
    /**
     * Agency - Working through an agency
     */
    Agency = 1.02,
    /**
     * Recruiter - Working through a recruiter
     */
    Recruiter = 1.02,
    /**
     * Upwork - Working through the Upwork platform
     */
    Upwork = 1.05,
}

/**
 * Payment modifiers reflect how and when you'll be paid for the work.
 * Different payment structures have different levels of risk and commitment.
 */
export const enum PaymentModifier {
    /**
     * Fixed - Fixed price for the entire project
     */
    Fixed = 1,
    /**
     * Hourly - Payment based on hours worked
     */
    Hourly = 1.02,
    /**
     * Retainer - Regular payment for ongoing work
     */
    Retainer = 1.05,
    /**
     * Milestone - Payment at specific project milestones
     */
    Milestone = 1.08,
}

/**
 * T_modifiers type defines the structure for holding all modifiers used in the rate calculation.
 */
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
 * ModifierList holds array of modifier values for each modifier category.
 * This allows to add multiple modifiers of the same type.
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
 *
 * Strings for modifier names.
 */
export type ModifierCategory = keyof ModifierList;