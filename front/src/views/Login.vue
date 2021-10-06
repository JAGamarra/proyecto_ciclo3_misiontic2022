<template>
	<v-app>
		<v-card width="400" class="mx-auto mt-5 ">
			<v-icon x-large color="blue" class="text">mdi-account-circle</v-icon>
			<div class="text-container ">
				<h1 class="display-1 text title">Autenticación</h1>
				<p class="info-text text">Ingresa para alquilar un carro</p>
			</div>
			<v-card-text>
				<v-form>
					<v-text-field label="Usuario" prepend-icon="mdi-account-circle" />
					<v-text-field
						:type="showPassword ? 'text' : 'password'"
						label="Contraseña"
						prepend-icon="mdi-lock"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showPassword = !showPassword"
					/>
				</v-form>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn color="success" to="/registroPersona">Registrarse</v-btn>
				<v-spacer></v-spacer>
				<v-btn color="info">Ingresar</v-btn>
			</v-card-actions>
		</v-card>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			showPassword: false
		}
	}
}
</script>

<style scoped>
.text-container {
	margin-top: 2.2rem;
}
.text {
	text-align: center;
}
.title {
	font-size: 2.3rem !important;
}
.info-text {
	font-size: 1rem;
	font-style: italic;
}
</style>