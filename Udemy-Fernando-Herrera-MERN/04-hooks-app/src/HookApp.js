import React from 'react'
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-UseEffect/SimpleForm';
// import { MultipleCustomHook } from './components/03-Examples-UseFetch/MultipleCustomHook';
// import { FocusScreen } from './components/04-Use-Ref/FocusScreen';
// import { RealExample } from './components/05-Use-Ref-RealExample/RealExample';
// import { UseMemo } from './components/06-Use-Memo/UseMemo';
// import { MemoHook } from './components/06-Use-Memo/MemoHook';
// import { CallBackHook } from './components/06-Use-Memo/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
export const HookApp = () => {
    return (
        <div>
            {/* <CounterApp />
            <CounterWithCustomHook />
            <SimpleForm />
            <MultipleCustomHook />
            <FocusScreen />
            <UseMemo />
            <MemoHook /> 
            <CallBackHook />
            <Padre />*/}
            <TodoApp/>
        </div>
    )
}

