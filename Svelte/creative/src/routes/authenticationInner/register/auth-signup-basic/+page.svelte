<script>
    import Link from "svelte-link";
    import { Card, CardBody, Col, Container, Row, Label } from "sveltestrap";
    import ParticlesAuth from "../../ParticlesAuth.svelte";

    //import images
    import logoLight from "../../../../assets/images/logo-light.png";
</script>

<svelte:head>
    <title>Sign Up | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<ParticlesAuth>
    <div class="auth-page-content pt-5">
        <Container>
            <Row>
                <Col lg={12}>
                <div class="text-center mt-sm-5 mb-4 text-white-50">
                    <div>
                        <Link href="/" class="d-inline-block auth-logo">
                        <img src={logoLight} alt="" height="20" />
                        </Link>
                    </div>
                    <p class="mt-3 fs-16 fw-semibold">
                        Premium Admin & Dashboard Template
                    </p>
                </div>
                </Col>
            </Row>

            <Row class="justify-content-center">
                <Col md={8} lg={6} xl={5}>
                <Card class="mt-4">
                    <CardBody class="p-4">
                        <div class="text-center mt-2">
                            <h5 class="text-primary">Create New Account</h5>
                            <p class="text-muted">
                                Get your free velzon account now
                            </p>
                        </div>
                        <div class="p-2 mt-4">
                            <form class="needs-validation" action="#">
                                <div class="mb-3">
                                    <Label for="useremail" class="form-label">Email <span
                                            class="text-danger">*</span></Label>
                                    <input type="email" class="form-control" id="useremail"
                                        placeholder="Enter email address" required />
                                    <div class="invalid-feedback">
                                        Please enter email
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <Label for="username" class="form-label">Username <span
                                            class="text-danger">*</span></Label>
                                    <input type="text" class="form-control" id="username" placeholder="Enter username"
                                        required />
                                    <div class="invalid-feedback">
                                        Please enter username
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <Label for="userpassword" class="form-label">Password <span
                                            class="text-danger">*</span></Label>
                                    <input type="password" class="form-control" id="userpassword"
                                        placeholder="Enter password" required />
                                    <div class="invalid-feedback">
                                        Please enter password
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <p class="mb-0 fs-13 text-muted fst-italic">
                                        By registering you agree to the
                                        Velzon
                                        <Link href={null}
                                            class="text-primary text-decoration-underline fst-normal fw-semibold">Terms of
                                        Use</Link>
                                    </p>
                                </div>

                                <div id="password-contain" class="p-3 bg-light mb-2 rounded">
                                    <h5 class="fs-13">Password must contain:</h5>
                                    <p id="pass-length" class="invalid fs-13 mb-2">Minimum <b>8 characters</b></p>
                                    <p id="pass-lower" class="invalid fs-13 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                    <p id="pass-upper" class="invalid fs-13 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                    <p id="pass-number" class="invalid fs-13 mb-0">A least <b>number</b> (0-9)</p>
                                </div>

                                <div class="mt-4">
                                    <button class="btn btn-success w-100" type="submit">Sign Up</button>
                                </div>

                                <div class="mt-4 text-center">
                                    <div class="signin-other-title">
                                        <h5 class="fs-14 mb-4 title text-muted">
                                            Create account with
                                        </h5>
                                    </div>

                                    <div>
                                        <button type="button"
                                            class="btn btn-primary btn-icon waves-effect waves-light"><i
                                                class="ri-facebook-fill fs-16" /></button>{" "}
                                        <button type="button"
                                            class="btn btn-danger btn-icon waves-effect waves-light"><i
                                                class="ri-google-fill fs-16" /></button>{" "}
                                        <button type="button" class="btn btn-dark btn-icon waves-effect waves-light"><i
                                                class="ri-github-fill fs-16" /></button>{" "}
                                        <button type="button" class="btn btn-info btn-icon waves-effect waves-light"><i
                                                class="ri-twitter-fill fs-16" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </CardBody>
                </Card>

                <div class="mt-4 text-center">
                    <p class="mb-0">
                        Already have an account ?
                        <Link href="/authenticationInner/login/auth-signin-basic"
                            class="fw-bold text-primary text-decoration-underline">
                        Signin
                        </Link>
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
</ParticlesAuth>