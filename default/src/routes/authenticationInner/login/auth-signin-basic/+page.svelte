<script>
	import { Container, Row, Col, Card, CardBody, Label } from "sveltestrap";
	import Link from "svelte-link";
	import ParticlesAuth from "../../ParticlesAuth.svelte";
	import logolight from '../../../../assets/images/logo-light.png'
</script>

<svelte:head>
	<title>Sign In | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<ParticlesAuth>
	<div class="auth-page-content pt-5">
		<Container>
			<Row>
				<Col lg={12}>
					<div class="text-center mt-sm-5 mb-4 text-white-50">
						<div>
							<Link href="/dashboard" class="d-inline-block auth-logo">
								<img
									src={logolight}
									alt=""
									height="20"
								/>
							</Link>
						</div>
						<p class="mt-3 fs-15 fw-medium">
							Premium Admin & Dashboard Template
						</p>
					</div>
				</Col>
			</Row>
			<!-- end row -->

			<Row class="justify-content-center">
				<Col md={8} lg={6} xl={5}>
					<Card class="mt-4">
						<CardBody class="p-4">
							<div class="text-center mt-2">
								<h5 class="text-primary">Welcome Back !</h5>
								<p class="text-muted">
									Sign in to continue to Velzon.
								</p>
							</div>
							<div class="p-2 mt-4">
								<form action="/dashboard">
									<div class="mb-3">
										<Label for="username" class="form-label"
											>Username</Label
										>
										<input
											type="text"
											class="form-control"
											id="username"
											placeholder="Enter username"
										/>
									</div>

									<div class="mb-3">
										<div class="float-end">
											<Link
												href="auth-pass-reset-basic"
												class="text-muted"
												>Forgot password?</Link
											>
										</div>
										<Label
											class="form-label"
											for="password-input">Password</Label
										>
										<div class="position-relative auth-pass-inputgroup mb-3"
										>
											<input
												type="password"
												class="form-control pe-5"
												placeholder="Enter password"
												id="password-input"
											/>
											<button
												class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
												type="button"
												id="password-addon"
												><i
													class="ri-eye-fill align-middle"
												/></button
											>
										</div>
									</div>

									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="auth-remember-check"
										/>
										<Label
											class="form-check-label"
											for="auth-remember-check"
											>Remember me</Label
										>
									</div>

									<div class="mt-4">
										<button
											class="btn btn-success w-100"
											type="submit">Sign In</button
										>
									</div>

									<div class="mt-4 text-center">
										<div class="signin-other-title">
											<h5 class="fs-13 mb-4 title">
												Sign In with
											</h5>
										</div>
										<div>
											<button
												type="button"
												class="btn btn-primary btn-icon waves-effect waves-light"
												><i
													class="ri-facebook-fill fs-16"
												/></button
											>
											<button
												type="button"
												class="btn btn-danger btn-icon waves-effect waves-light"
												><i
													class="ri-google-fill fs-16"
												/></button
											>
											<button
												type="button"
												class="btn btn-dark btn-icon waves-effect waves-light"
												><i
													class="ri-github-fill fs-16"
												/></button
											>
											<button
												type="button"
												class="btn btn-info btn-icon waves-effect waves-light"
												><i
													class="ri-twitter-fill fs-16"
												/></button
											>
										</div>
									</div>
								</form>
							</div>
						</CardBody>
						<!-- end card body -->
					</Card>
					<!-- end card -->

					<div class="mt-4 text-center">
						<p class="mb-0">
							Don't have an account ? <Link
								href="/authenticationInner/register/auth-signup-basic"
								class="fw-semibold text-primary text-decoration-underline">
								Signup
							</Link>
						</p>
					</div>
				</Col>
			</Row>
			<!-- end row -->
		</Container>
		<!-- end container -->
	</div>
</ParticlesAuth>
