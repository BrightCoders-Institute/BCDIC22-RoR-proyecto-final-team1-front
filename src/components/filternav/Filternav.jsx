import './Filternav.css' 
import { FireIcon } from "@heroicons/react/24/outline";
import { MdCottage } from "react-icons/md";
import { GiCastle } from "react-icons/gi"
import { GiGolfTee } from "react-icons/gi"
import { MdOutlineHouseboat } from "react-icons/md"
import { MdOutlineBedroomParent } from "react-icons/md"
import { TbBeach } from "react-icons/tb"
import { GiPoolDive } from "react-icons/gi"
import { GiWoodCabin } from "react-icons/gi"
import { GiFamilyHouse } from "react-icons/gi"
import { GiMountainRoad } from "react-icons/gi"
import { GiPalmTree } from "react-icons/gi"

const filterList = [
  { id:1, iconF:"MdCottage", details:"Casas de Campo"  },
  { id:2, iconF:"GiCastle", details:"Castillos"  }
]

/*
  {filterList.map(option => (
    <div class="filter-opt">
    <{option.iconF} class="filter-icon" />
    <a class="filter" href="#">{option.details}</a>
    </div>
  ))} 
  */
export default function navBar() {
  return (
    <div class="filter-nav pt-8 pb-3 mx-6 overflow-y-auto whitespace-nowrap scroll-smooth flex flex-row">


      <div class="filter-opt">
        <MdCottage class="filter-icon" />
        <a class="filter" href="#">Casas de Campo</a>
      </div>

      <div class="filter-opt">
        <GiCastle class="filter-icon" />
        <a class="filter" href="#">Castillos</a>
      </div>

      <div class="filter-opt">
        <FireIcon class="filter-icon" />
        <a class="filter" href="#">Populares</a>
      </div>

      <div class="filter-opt">
        <GiGolfTee class="filter-icon" />
        <a class="filter" href="#">Golf</a>
      </div>

      <div class="filter-opt">
        <MdOutlineHouseboat class="filter-icon" />
        <a class="filter" href="#">Lago</a>
      </div>

      <div class="filter-opt">
        <MdOutlineBedroomParent class="filter-icon" />
        <a class="filter" href="#">Habitaciones privadas</a>
      </div>

      <div class="filter-opt">
        <TbBeach class="filter-icon" />
        <a class="filter" href="#">Frente a la playa</a>
      </div>

      <div class="filter-opt">
        <GiPoolDive class="filter-icon" />
        <a class="filter" href="#">Albercas increibles</a>
      </div>

      <div class="filter-opt">
        <GiWoodCabin class="filter-icon" />
        <a class="filter" href="#">Cabañas</a>
      </div>

      <div class="filter-opt">
        <GiFamilyHouse class="filter-icon" />
        <a class="filter" href="#">Mansiones</a>
      </div>

      <div class="filter-opt">
        <GiMountainRoad class="filter-icon" />
        <a class="filter" href="#">Vista increible</a>
      </div>
    
      <div class="filter-opt">
        <GiPalmTree class="filter-icon" />
        <a class="filter" href="#">Tropical</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Extraordinarios</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Casas domo</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Minicasas</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">En el lago</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Casas de arbol</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Islas</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Parques nacionales</a>
      </div>

      <div class="filter-opt">
        <a class="filter" href="#">Luxe</a>
      </div>

    </div>
  )
}

