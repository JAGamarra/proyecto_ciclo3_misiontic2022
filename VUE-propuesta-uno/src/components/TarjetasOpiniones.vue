<template>
  <v-card  class="mx-auto my-3" max-width="400">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card class="d-flex justify-start ">
        <v-list-item-avatar color="grey darken-3">
        <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
        <v-list-item-title>Luis Pérez</v-list-item-title>
        </v-list-item-content>

        <v-card-title>Bogotá</v-card-title>
    </v-card>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5</div>
      </v-row>

      <div class="my-4">
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

</script>

<style>
</style>