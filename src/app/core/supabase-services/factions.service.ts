import { Injectable } from "@angular/core";
import { supabase } from "../supabase.client";

@Injectable({
  providedIn: 'root'
})
export class FactionsService {

  async getFactions() {
    const { data, error } = await supabase
      .schema('Artemia')
      .from('Factions')
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  }
}