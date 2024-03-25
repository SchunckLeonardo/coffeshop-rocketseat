import ExpressoAmericano from '../assets/coffee-americano.png'
import Arabe from '../assets/coffee-arabe.png'
import Capuccino from '../assets/coffee-capuccino.png'
import ChocolateQuente from '../assets/coffee-chocolate-quente.png'
import Cubano from '../assets/coffee-cubano.png'
import ExpressoTradicional from '../assets/coffee-expresso.png'
import ExpressoCremoso from '../assets/coffee-expresso-cremoso.png'
import ExpressoGelado from '../assets/coffee-gelado.png'
import Havaiano from '../assets/coffee-havaiano.png'
import Irlandes from '../assets/coffee-irlandes.png'
import Latte from '../assets/coffee-latte.png'
import CafeComLeite from '../assets/coffee-leite.png'
import Machiato from '../assets/coffee-macchiato.png'
import Mocaccino from '../assets/coffee-mochaccino.png'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: ExpressoTradicional,
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    image: ExpressoAmericano,
    price: 9.9,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    image: ExpressoCremoso,
    price: 9.9,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    image: ExpressoGelado,
    price: 9.9,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    image: CafeComLeite,
    price: 9.9,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 6,
    name: 'Latte',
    image: Latte,
    price: 9.9,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    image: Capuccino,
    price: 9.9,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    image: Machiato,
    price: 9.9,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    image: Mocaccino,
    price: 9.9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    image: ChocolateQuente,
    price: 9.9,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com Leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    image: Cubano,
    price: 9.9,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    image: Havaiano,
    price: 9.9,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    image: Arabe,
    price: 9.9,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    image: Irlandes,
    price: 9.9,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
  },
]
