import { ModifierList, ModifierCategory } from './modifiers';

/**
 * RateCalculator class manages modifiers and calculates the current rate based on a base rate and applied modifiers.
 */
export class RateCalculator {
    private hourRate: number;
    private modifiers: ModifierList;

    constructor(baseRate: number, initialModifiers: ModifierList = {} as ModifierList) {
        this.hourRate = baseRate;
        this.modifiers = initialModifiers;
    }

    /**
     * Gets the current rate after applying all modifiers to the base rate.
     *
     * @returns The calculated current rate.
     */
    public get currentRate(): number {
        // Calculate the current rate by multiplying all modifier values, including custom
        let totalModifier = 1;
        for (const val of Object.values(this.modifiers)) {
            if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                // Handle custom modifiers (Record<string, number>)
                for (const customVal of Object.values(this.modifiers.custom || {})) {
                    totalModifier *= customVal;
                }
            } else if (typeof val === 'number') {
                totalModifier *= val;
            }
        }
        const rate = this.hourRate * totalModifier;
        return rate;
    }

    /**
     * Add a modifier to the rate calculator.
     *
     * @param type Type of modifier to add.
     * @param value Modifier value to add.
     */
    public addModifier<T extends ModifierCategory>(type: T, value: ModifierList[T]): void {
        this.modifiers[type] = value;
    }

    /**
     * Remove a modifier from the rate calculator.
     *
     * @param type
     */
    public removeModifier<T extends ModifierCategory>(type: T): void {
        delete this.modifiers[type];
    }
}