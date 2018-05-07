import { Action } from '@ngrx/store';
import { DataSample  } from '../Model/data-sample';
import * as SampleActions from '../Action/Data.action';

// Section 1

// Section 2
export function simpleReducer(state: DataSample [] = [], action: SampleActions.Actions) {

    // Section 3
    switch (action.type) {
        case SampleActions.ADD_SAMPLE:
            return [...state, action.payload];
        default:
            return state;
    }
}