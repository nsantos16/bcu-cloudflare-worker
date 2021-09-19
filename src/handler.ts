interface BcuResponseCotizaciones {
  ArbAct: number
  CodigoISO: string
  Emisor: string
  Fecha: string
  FormaArbitrar: number
  Moneda: number
  Nombre: string
  TCC: number
  TCV: number
}

interface BcuResponseStatus {
  status: number
  codigoError: number
  mensaje: string
}

interface BcuResponseList {
  Moneda: null | string
  RespuestaStatus: BcuResponseStatus
  Cotizaciones: BcuResponseCotizaciones[]
}

interface BcuResponse {
  operation: string
  cotizacionesoutlist: BcuResponseList
}

const BCU_ENDPOINT =
  'https://www.bcu.gub.uy/_layouts/15/BCU.Cotizaciones/handler/CotizacionesHandler.ashx?op=getcotizaciones'

export async function handleRequest(request: Request): Promise<Response> {
  const data = await request.json();
  const res = await fetch(BCU_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      KeyValuePairs: {
        Monedas: [{ Val: '2225', Text: 'DLS. USA BILLETE' }],
        FechaDesde: data.date,
        FechaHasta: data.date,
        Grupo: '2',
      },
    }),
  })

  const response: BcuResponse = await res.json();

  return new Response(JSON.stringify(response.cotizacionesoutlist.Cotizaciones[0]["TCV"]), {
    headers: { 'Content-Type': 'application/json' },
  })
}
