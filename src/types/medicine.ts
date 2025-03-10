// types/medicine.ts
export interface Laboratory {
    id: number;
    name: string;
  }
  
  export interface Branch {
    id: number;
    name: string;
  }
  
  export interface TherapeuticAction {
    id: number;
    description: string;
  }
  
  export interface Monodrug {
    id: number;
    name: string;
    description: boolean;
  }
  
  // Agrega aquí cualquier otra interfaz o tipo relacionado con medicamentos
    export interface MedicineP {
        id: number;
        name: string;
        presentation: string;
        maincomponent: string;
        action_id: number;
        price: number;
        amount: number;
        lab_name: string;
        drugs: string;
        branch_id: number
    }