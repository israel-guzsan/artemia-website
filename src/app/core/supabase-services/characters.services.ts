import { Injectable } from "@angular/core";
import { supabase } from "../supabase.client";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  async getCharacters() {
    const { data, error } = await supabase
      .schema('Artemia')
      .from('Characters')
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  }
}