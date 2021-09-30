><template>
    <v-form
        ref="form"
        v-model= "valid"
        lazy-validation
    >
        <v-text-field
            v-model= "pqrs"
            :counter= "200"
            :rules= "pqrsRules"
            label="Motivo de esta PQRS"
            required>
        </v-text-field>

        <v-text-field
            v-model= "email"
            :rules= "emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-select
            v-model= "select"
            :items= "items"
            :rules= "[val => !! val || 'Se requiere una opcion']"
            label= "Servicio o Area Involucrada" required >
        </v-select>

        <v-checkbox
            v-model= "checkbox"
            :rules= "[v => !!v || 'Debe aceptar para enviar su PQRS!']"
            label="Aceptar Terminos, Condiciones y Ley de Proteccion de Datos?"
            required>
        </v-checkbox>
        
        <v-btn
            :disabled= "!valid"
            color="success"
            class="mr-4"
            @click= "validate">
            Verificar
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click= "reset">
            Limpiar Formulario
        </v-btn>

        <v-btn
            color="warning"
            @click = "resetValidation">
            Reset Validacion
        </v-btn>
    </v-form>

</template>

<script>

export default {
    data: () => ({
        valid: true,
        pqrs: '',
        pqrsRules: [
            v => !!v || 'Se requiere documentar esta PQRS',
            v => (v && v.length <= 150) || 'Menos de 200 caracteres',
        ],
        email: '',
        emailRules: [
            v => !!v || 'Se requiere email',
            v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
        ],
        select: null,
        items: [
            'Reserva',
            'Atencion al Cliente',
            'Cobros',
            'Oficinas',
            'Otros',
        ],
        checkbox: false,
        
    }),
    

    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
}
</script>
