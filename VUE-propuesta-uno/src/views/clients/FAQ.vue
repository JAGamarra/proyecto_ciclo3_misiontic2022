<template>
  <div>
    <h1>Preguntas frecuentes</h1>
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>
            1. ¿Qué tipos de licencia son válidos para alquilar un automóvil en
            MINTICAR?
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Una licencia de conducir colombiana será requerida, mínimo categoría
          B2. Las licencias de conducir provisionales (o de aprendizaje) no son
          aceptadas para el alquiler. <br />Para el caso de ciudadanos
          extranjeros, los requisitos dependerán del país de donde el visitante
          provenga. <br />En cualquier caso, cualquier persona que se encuentre
          en el territorio nacional colombiano por un término superior a seis
          meses, deberá contar con una licencia de conducir expedida en Colombia
          por un organismo de tránsito competente.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- </v-expansion-panels>
    <v-expansion-panels class="mb-6"> -->
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>
            2. ¿Qué tipo de identificación debo presentar para alquilar un
            automóvil?
          </h3>
          <!-- <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          El conductor principal debe presentar la siguiente documentación a su
          nombre:<br />
          * Cédula de ciudadanía colombiana o pasaporte extranjero con vigencia
          mínima de seis meses posteriores al fin del período por el cual planea
          alquilar el vehículo.<br />
          * Una tarjeta de crédito con crédito suficiente para cubrir el
          depósito para el vehículo. * Una licencia completa de conducir, de
          categoría mínimo B2.<br />
          * La reserva electrónica que previamente tramitó en nuestra aplicación
          web.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>3. ¿Cuál es el kilometraje permitido?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          A menos que su contrato estipule algo diferente, el kilometraje
          permitido es de 300 km por día.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3> 4. ¿Con qué seguro cuenta el vehículo que alquilo?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-alert-circle
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Todos nuestros vehículos cuentan con SOAT, el cual es obligatorio para
          todos los vehículos que circulan por el territorio colombiano. Además
          un seguro todo riesgo, con cubrimientos superiores al promedio y
          cubrimiento en todo el territorio nacional.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>
            5. ¿Qué debo hacer si el vehículo se avería o si tengo un accidente?
          </h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          En caso de avería o accidente, comuníquese inmediatamente a nuestra
          línea de emergencias 24/7 01800099999. Uno de nuestros operadores lo
          guiará para superar de la mejor manera y en el menor tiempo posible el
          inconveniente presentado. En caso de accidente, además, recomendamos
          llamar también a la línea de la Policía Nacional 123 e informar acerca
          de lo ocurrido.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>6. ¿Cómo añado opciones adicionales al vehículo que alquilaré?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          En la página de reserva encontrará las opciones disponibles para cada
          uno de nuestros vehículos, las cuales podrá seleccionar allí mismo y
          el sistema le indicará el costo adicional, si lo hubiese, que dicha
          opción implicaría.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>7. ¿Puedo añadir conductores adicionales?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Es posible añadir conductores adicionales a su vehículo, siempre y
          cuando cuenten con todos los requisitos en lo referente a
          documentación y edad. El conductor o conductores adicionales deberán
          quedar registrados al momento de registrar el contrato de alquiler.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>8. ¿Qué debo hacer cuando recibo el automóvil?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          *Revisar el vehículo, tanto interna como externamente. En caso de
          encontrar algún daño, infórmelo inmediatamente al representante de la
          compañía y solicite dejar registro por escrito del hallazgo.<br />
          *Comprobar si utiliza gasolina o diésel.<br />
          *Revisar el indicador de nivel de combustible. Nuestros vehículos se
          entregan con tanque lleno, y de igual manera deben ser devueltos.<br />
          *Ajuste los asientos y espejos, de tal manera que sea seguro y
          confortable para ud y sus acompañantes.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>9. ¿Cómo devuelvo el automóvil?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          En su contrato estará especificada la hora exacta de entrega del
          coche. El vehículo será revisado cuando lo devuelva, por eso le
          recomendamos tener en cuenta el tiempo adicional que este
          procedimiento adicional puede tomar. Una vez revisado y revisado a
          conformidad, un representante de nuestra compañía le entregará el
          documento de recibo, el cual recomendamos guardar.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <h3>10. ¿Cuándo será devuelto el depósito de mi tarjeta de crédito?</h3>
          <!-- <template v-slot:actions>
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Tan pronto haga devolución del coche sin novedad, el depósito de
          garantía será desbloqueada de su tarjeta de crédito. Esta operación
          normalmente toma entre 7 y 21 días hábiles. Puede contactar a su banco
          para obtener información más precisa.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
