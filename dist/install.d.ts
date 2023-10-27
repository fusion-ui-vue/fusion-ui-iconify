import type { Component } from 'vue';
import type { SFCInstallWithContext, SFCWithInstall } from './type';
export declare function withInstall<T extends Component>(comp: T, name: string): SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
