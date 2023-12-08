import type { PostgrestSingleResponse } from "@supabase/supabase-js"
import { supabase } from "../../client"
import type { Database } from "../../supabase.types"

type Test = Database['public']['Tables']['test']['Row']

export const insertNewTest = async (name: string) => {
    return await supabase
        .from('test')
        .insert({ name })
        .select()
}

export const getAllTests:() => Promise<PostgrestSingleResponse<Test[]>> = async () => {
    return await supabase
        .from('test')
        .select()
}