/**
 * This is a documentation for the OtherModule module. It depends on the MyModule module
 * and contains the [[OtherClass]] class.
 */

 /** */
import * as myMd from './MyModule';

/**
 * This class is inherited from the [[DerivedClass]] class.
 */
export class OtherClass extends myMd.DerivedClass {
    /**
     * This is an alternative to the [[DerivedClass.theMethod]] method and
     * the [[mainProp]] property.
     * @param value A [[DerivedClass]] instance to {@link DerivedClass} process.
     * @returns The resulting [[MyClass]] instance.
     */
    theOtherMethod(value: myMd.DerivedClass): myMd.MyClass {
        return value;
    }
}

