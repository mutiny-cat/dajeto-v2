export interface EnlaceLegal {
  texto: string
  ruta: string
}

export const enlacesLegales: EnlaceLegal[] = [
  { texto: "Aviso legal", ruta: "/legalidad/aviso-legal/" },
  { texto: "Política de privacidad", ruta: "/legalidad/privacidad/" },
  { texto: "Política de cookies", ruta: "/legalidad/cookies/" },
  { texto: "Accesibilidad", ruta: "/legalidad/accesibilidad/" },
]
