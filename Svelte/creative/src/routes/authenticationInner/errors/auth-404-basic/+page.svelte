<script>
	import error from "../../../../assets/images/error.svg";
	import { Col, Container, Row } from "sveltestrap";
	import Link from "svelte-link";
	import ParticlesAuth from "../../ParticlesAuth.svelte";
</script>

<svelte:head>
	<title>404 Error Basic | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<div class="auth-page-wrapper">
	<ParticlesAuth>
		<div class="auth-page-content">
			<Container>
				<Row>
					<Col lg={12}>
						<div class="text-center pt-4">
							<div class="">
								<img
									src={error}
									alt=""
									class="error-basic-img move-animation"
								/>
							</div>
							<div class="mt-n4">
								<h1 class="display-1 fw-semibold">404</h1>
								<h3 class="text-uppercase">
									Sorry, Page not Found 😭
								</h3>
								<p class="text-muted mb-4">
									The page you are looking for not available!
								</p>
								<Link href="/dashboard" class="btn btn-success"
									><i class="mdi mdi-home me-1" />Back to home</Link
								>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</ParticlesAuth>
</div>
