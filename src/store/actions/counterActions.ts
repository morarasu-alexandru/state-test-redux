export enum CounterActionTypes {
  Increment = 'COUNTER--INCREMENT',
  Decrement = 'COUNTER--DECREMENT'
}

interface Increment {
  type: typeof CounterActionTypes.Increment;
}

interface Decrement {
  type: typeof CounterActionTypes.Decrement;
}

export const increment = ():Increment => ({
  type: CounterActionTypes.Increment
})



export const decrement = ():Decrement => ({
  type: CounterActionTypes.Decrement
})

export type CounterActions = Increment | Decrement;
