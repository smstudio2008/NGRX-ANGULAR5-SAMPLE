
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { DataSample } from '../Model/data-sample';


export const ADD_SAMPLE       = '[DataSample] Add';


export class AddData implements Action {
    readonly type = ADD_SAMPLE;

    constructor(public payload: DataSample) {}
}


export type Actions = AddData;
