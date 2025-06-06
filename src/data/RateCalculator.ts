import { ModifierList, ModifierCategory, ModifierListArrays } from './modifiers';

/**
 * RateCalculator class manages modifiers and calculates the current rate based on a base rate and applied modifiers.
 */
export class RateCalculator {
    private hourRate: number;
    private modifiers: ModifierListArrays;

    constructor(baseRate: number, initialModifiers: ModifierListArrays = {} as ModifierListArrays) {
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
        for (const modifierGroup of Object.values(this.modifiers)) {
            if (typeof modifierGroup === 'object' && modifierGroup !== null && !Array.isArray(modifierGroup)) {
                // count all modifiers in the group
                for (const customGroupValues of Object.values(modifierGroup)) {
                    if (typeof customGroupValues === 'number') {
                        totalModifier *= customGroupValues;
                    }
                }
            } else {
                // If it's an array, multiply all values in the array
                for (const value of modifierGroup) {
                    if (typeof value === 'number') {
                        totalModifier *= value;
                    }
                }
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
        if (!this.modifiers[type]) {
            this.modifiers[type] = [];
        }

        this.modifiers[type].push(value);
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