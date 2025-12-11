import {createSlice} from '@reduxjs/toolkit'

export interface oneState {
    wind: 'title' | 'aboutme' | 'produce' | 'service' | 'fabrication' | 'recommendation'
    // title:'Экзамен'|'Все вопросы'|'Ошибки'|'Выбранные'|'ПДД'|'Поиск'
}

const initialState:oneState = {
    wind: 'title',
}

const oneSlice = createSlice({
    name: 'oneSlice',
    initialState,
    reducers: {

        setWind(state, action){
            state.wind  = action.payload
        }

        // ...Redusers:...
    }

})

export const {
    // styleVisibleAddTask,
    setWind,



} = oneSlice.actions;
export default oneSlice.reducer
