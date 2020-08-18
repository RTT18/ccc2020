export interface BookState{
    id?: number
    isbn: number
    page: number
    thum: string | null
    status: string
    startDay: string | null
    endDay: string | null
}