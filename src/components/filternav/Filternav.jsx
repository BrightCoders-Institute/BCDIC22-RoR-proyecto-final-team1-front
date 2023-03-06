import './Filternav.css' 
import { MdCottage } from "react-icons/md";
import { GiCastle } from "react-icons/gi"
import { FireIcon } from "@heroicons/react/24/outline";
import { GiGolfTee } from "react-icons/gi"
import { MdOutlineHouseboat } from "react-icons/md"
import { MdOutlineBedroomParent } from "react-icons/md"
import { TbBeach } from "react-icons/tb"
import { GiPoolDive } from "react-icons/gi"
import { GiWoodCabin } from "react-icons/gi"
import { GiFamilyHouse } from "react-icons/gi"
import { GiMountainRoad } from "react-icons/gi"
import { GiPalmTree } from "react-icons/gi"
import { GiUfo } from "react-icons/gi"
import { GiHabitatDome } from "react-icons/gi"
import { BsHouseDoor } from "react-icons/bs"
import { GiTreehouse } from "react-icons/gi"
import { GiIsland } from "react-icons/gi"
import { GiParkBench } from "react-icons/gi"
import { BiDish } from "react-icons/bi"
import { RiFilter3Line } from "react-icons/ri"

const filterList = [
  { id:1, iconF:MdCottage, details:"Casas de Campo"  },
  { id:2, iconF:GiCastle, details:"Castillos"  },
  { id:3, iconF:FireIcon, details:"Populares"  },
  { id:4, iconF:GiGolfTee, details:"Golf"  },
  { id:5, iconF:MdOutlineHouseboat, details:"Lago"  },
  { id:6, iconF:MdOutlineBedroomParent, details:"Habitaciones Privadas"  },
  { id:7, iconF:TbBeach, details:"Frente a la playa"  },
  { id:8, iconF:GiPoolDive, details:"Albercas increibles"  },
  { id:9, iconF:GiWoodCabin, details:"Cabañas"  },
  { id:10, iconF:GiFamilyHouse, details:"Mansiones"  },
  { id:11, iconF:GiMountainRoad, details:"Vista increible"  },
  { id:12, iconF:GiPalmTree, details:"Tropical"  },
  { id:13, iconF:GiHabitatDome, details:"Casas domo"  },
  { id:14, iconF:BsHouseDoor, details:"Minicasas"  },
  { id:15, iconF:GiTreehouse, details:"Casas de Arbol"  },
  { id:16, iconF:GiIsland, details:"Islas"  },
  { id:17, iconF:GiParkBench, details:"Parques nacionales"  },
  { id:18, iconF:BiDish, details:"Luxe"  },
  { id:19, iconF:GiUfo, details:"Extraordinarios"  }
];

export default function navBar() {
  return (
    <div class="flex flex-row justify-center items-center">
      <div class="filter-nav pt-6 pb-3 mx-6 overflow-y-auto whitespace-nowrap scroll-smooth flex flex-row">

        {filterList.map(option => (
          <div class="filter-opt">
            <option.iconF class="filter-icon" />
            <a class="filter" href="#">{option.details}</a>
          </div>
        ))}

      </div>
    
      <div class="button-filter-container">
        <button type="button" class="button-filter">
          <RiFilter3Line class="button-filter-icon" />
          <p>Filtros</p>
        </button>
      </div>

    </div>

  )
}

