"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import {
  fetchLaboratories,
  fetchBranches,
  fetchTherapeuticActions,
  fetchMonodrugs,
  createMedicine,
} from "@/services/medicine";
import { Laboratory, Branch, TherapeuticAction, Monodrug } from "@/types/medicine";
import { toast } from "@/components/ui/use-toast";

export default function MedicineForm() {
  const router = useRouter();

  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [mainComponent, setMainComponent] = useState("");
  const [presentation, setPresentation] = useState("");
  const [laboratory, setLaboratory] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [therapeuticAction, setTherapeuticAction] = useState("");
  const [newTherapeuticAction, setNewTherapeuticAction] = useState("");
  const [branch, setBranch] = useState("");

  // Estados para las opciones de los selects
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [therapeuticActions, setTherapeuticActions] = useState<TherapeuticAction[]>([]);
  const [monodrugs, setMonodrugs] = useState<Monodrug[]>([]);

  // Estado para el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos iniciales
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);

        const [
          laboratories,
          branches,
          therapeuticActions,
          monodrugs,
        ] = await Promise.all([
          fetchLaboratories(),
          fetchBranches(),
          fetchTherapeuticActions(),
          fetchMonodrugs(),
        ]);

        setLaboratories(laboratories);
        setBranches(branches);
        setTherapeuticActions(therapeuticActions);
        setMonodrugs(monodrugs.map((drug) => ({ ...drug, selected: false })));

        setError(null);
      } catch (err) {
        console.error("Error fetching initial data:", err);
        setError("Error al cargar los datos iniciales. Por favor, recargue la página o contacte al administrador.");

        toast({
          title: "Error",
          description: "No se pudieron cargar los datos iniciales. Por favor, intente nuevamente.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Función para manejar la selección de monodrogas
  const handleMonodrugSelection = (id: number) => {
    setMonodrugs((prevMonodrugs) =>
      prevMonodrugs.map((drug) => (drug.id === id ? { ...drug, selected: !drug.description } : drug))
    );
  };

  // Función para agregar una nueva acción terapéutica
  const handleAddTherapeuticAction = async () => {
    if (!newTherapeuticAction.trim()) {
      toast({
        title: "Campo vacío",
        description: "Por favor, ingrese un nombre para la acción terapéutica.",
        variant: "destructive",
      });
      return;
    }

    try {
      const newAction = await fetchTherapeuticActions(newTherapeuticAction);
      setTherapeuticActions((prev) => [...prev, newAction]);
      setTherapeuticAction(newAction.id.toString());
      setNewTherapeuticAction("");

      toast({
        title: "Acción terapéutica agregada",
        description: `Se ha agregado "${newAction.name}" a la lista de acciones terapéuticas.`,
      });
    } catch (err: any) {
      console.error("Error adding therapeutic action:", err);

      toast({
        title: "Error",
        description:
          err.response?.data?.message || "No se pudo agregar la acción terapéutica. Por favor, intente nuevamente.",
        variant: "destructive",
      });
    }
  };

  // Función para enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!name || !mainComponent || !presentation || !laboratory || !price || !amount || !therapeuticAction || !branch) {
      toast({
        title: "Error de validación",
        description: "Por favor, complete todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Validar que el precio sea un número positivo
    if (Number.parseFloat(price) <= 0) {
      toast({
        title: "Error de validación",
        description: "El precio debe ser mayor que cero.",
        variant: "destructive",
      });
      return;
    }

    // Validar que la cantidad sea un número entero positivo
    if (Number.parseInt(amount) <= 0 || !Number.isInteger(Number.parseFloat(amount))) {
      toast({
        title: "Error de validación",
        description: "La cantidad debe ser un número entero positivo.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Obtener el nombre del laboratorio seleccionado
      const selectedLab = laboratories.find((lab) => lab.id.toString() === laboratory);
      const lab_name = selectedLab ? selectedLab.name : "";

      // Obtener las monodrogas seleccionadas
      const selectedDrugs = monodrugs
        .filter((drug) => drug.description)
        .map((drug) => drug.name)
        .join(", ");

      // Preparar los datos según la estructura requerida
      const medicineData = {
        name,
        presentation,
        maincomponent: mainComponent,
        action_id: Number.parseInt(therapeuticAction),
        price: Number.parseFloat(price),
        amount: Number.parseInt(amount),
        lab_name,
        drugs: selectedDrugs || "ninguna",
        branch_id: Number.parseInt(branch),
      };

      console.log("Enviando datos al servidor:", medicineData);

      // Enviar los datos al backend
      const response = await createMedicine(medicineData);
      console.log("Respuesta del servidor:", response);

      toast({
        title: "Medicamento registrado",
        description: "El medicamento ha sido registrado exitosamente.",
      });

      // Redireccionar a la lista de medicamentos
      router.push("/PanelAdmin/Medicines");
    } catch (err: any) {
      console.error("Error submitting form:", err);

      const errorMessage =
        err.response?.data?.message || "Error al registrar el medicamento. Por favor, intente nuevamente.";
      setError(errorMessage);

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mostrar un indicador de carga mientras se cargan los datos iniciales
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E0FFFF" }}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007863] mx-auto mb-4"></div>
            <p className="text-lg text-[#007863]">Cargando datos...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E00FFFF" }}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <div className="absolute left-0 ml-4">
            <Link href="/PanelAdmin/Medicines">
              <Button variant="ghost" className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              REGISTRO DE NUEVO MEDICAMENTO
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Nombre: </label>
              <Input
                type="text"
                placeholder="Nombre del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Componente: </label>
              <Input
                type="text"
                placeholder="Nombre del componente principal"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
                value={mainComponent}
                onChange={(e) => setMainComponent(e.target.value)}
                required
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Presentación: </label>
              <Input
                type="text"
                placeholder="Presentación del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
                value={presentation}
                onChange={(e) => setPresentation(e.target.value)}
                required
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Proveedor: </label>
              <Select value={laboratory} onValueChange={setLaboratory}>
                <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                  <SelectValue placeholder="Nombre del laboratorio" />
                </SelectTrigger>
                <SelectContent>
                  {laboratories.map((lab) => (
                    <SelectItem key={lab.id} value={lab.id.toString()}>
                      {lab.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Precio: </label>
              <Input
                type="number"
                placeholder="Precio del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0.01"
                step="0.01"
                required
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Cantidad: </label>
              <Input
                type="number"
                placeholder="Cantidad a guardar del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                step="1"
                required
              />
            </div>
            <div className="m-6 block gap-5">
              <div className="m-6 flex gap-5">
                <label className="text-[#024442] p-1 my-2">Acción terapéutica:</label>
                <Select value={therapeuticAction} onValueChange={setTherapeuticAction}>
                  <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                    <SelectValue placeholder="Acción terapéutica" />
                  </SelectTrigger>
                  <SelectContent>
                    {therapeuticActions.map((action) => (
                      <SelectItem key={action.id} value={action.id.toString()}>
                        {action.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[#024442] p-1 my-2">Nueva acción terapéutica:</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Nueva acción terapéutica"
                    className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1 flex-grow"
                    value={newTherapeuticAction}
                    onChange={(e) => setNewTherapeuticAction(e.target.value)}
                  />
                  <Button
                    type="button"
                    onClick={handleAddTherapeuticAction}
                    className="bg-[#007863] text-white px-4 py-2 flex items-center justify-center rounded-md hover:bg-[#026553] transition-colors duration-[10s]"
                  >
                    Nueva acción
                  </Button>
                </div>
              </div>
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Sucursal: </label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                  <SelectValue placeholder="Sucursal de la farmacia" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.id.toString()}>
                      {branch.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="m-6">
              <label className="text-[#024442] p-1 my-2"> Monodrogas: </label>
              <div className="bg-white shadow-md rounded-lg p-4 block m-5">
                <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                  <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                    Código
                  </h2>
                  <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                    Monodroga
                  </h2>
                  <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                    Selección
                  </h2>
                </div>

                {monodrugs.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">
                    No hay monodrogas disponibles.
                  </div>
                ) : (
                  monodrugs.map((drug) => (
                    <div
                      key={drug.id}
                      className="grid grid-cols-3 gap-4 m-1 mb-3 border-b border-gray-200 py-2 items-center"
                    >
                      <p className="text-sm text-[#727473] text-center">{drug.id}</p>
                      <p className="text-sm text-[#727473] text-center">{drug.name}</p>
                      <div className="flex justify-center">
                        <input
                          type="checkbox"
                          checked={drug.selected}
                          onChange={() => handleMonodrugSelection(drug.id)}
                          className="form-checkbox h-5 w-5 text-[#007863] rounded border-gray-300 focus:ring-[#007863]"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                type="submit"
                className="bg-[#007863] text-white px-6 py-3 rounded-md hover:bg-[#026553] transition-colors duration-[10s]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Registrar Medicamento"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}