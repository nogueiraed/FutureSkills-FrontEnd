import React from 'react';
import FormDW from "../forms/FormDailyWorksheet";
import Layout from "../template/Layout";
import { useLocation } from "react-router-dom";

export default function RegDW(){
    const location = useLocation(); // Usando useLocation para obter a localização atual
    console.log("Props.location:", location); // Adicionando um console.log para verificar os dados de props.location
    return(
        <Layout>
            <FormDW location={location}/>
        </Layout>
    )
}
