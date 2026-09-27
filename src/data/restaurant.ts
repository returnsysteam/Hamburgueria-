/**
 * Dados oficiais e verificados da Inês Burguer
 * Regra: Nenhuma informação inventada.
 */
export const RESTAURANT_DATA = {
  name: 'Inês Burguer',
  tagline: 'Hamburgueria Artesanal em Atibaia',
  category: 'Hamburgueria',
  address: {
    street: 'R. Brasil, 521',
    neighborhood: 'Atibaia Jardim',
    city: 'Atibaia',
    state: 'SP',
    zip: '12942-210',
    full: 'R. Brasil, 521 - Atibaia Jardim, Atibaia - SP, 12942-210',
  },
  phone: {
    display: '(11) 91967-3776',
    clean: '+5511919673776',
  },
  whatsappUrl: 'https://wa.me/5511919673776',
  ifoodUrl:
    'https://www.ifood.com.br/delivery/atibaia-sp/ines-burguer---atibaia-atibaia-jardim/c0369054-ce5a-452f-9fd2-a9b21541586d',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Brasil%2C+521+-+Atibaia+Jardim%2C+Atibaia+-+SP%2C+12942-210',
  priceRange: 'R$ 60–80 por pessoa',
  rating: {
    score: 4.5,
    count: 114,
    source: 'Google Avaliações',
  },
  schedule: {
    statusNote: 'Fechado • Abre às 18:00',
  },
  editorialBadges: [
    'Atibaia Jardim',
    'Avaliação 4,5 ★',
    '114 Avaliações Reais',
    'Hambúrguer Artesanal',
  ],
} as const;

