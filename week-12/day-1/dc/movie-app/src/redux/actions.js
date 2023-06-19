export const DETAIL = 'detail';

export const showDetail = (item) => {
    return{
        type:DETAIL,
        payload: item
    }
}
