<script>
    import Link from "svelte-link";
    import { Card, CardBody, Col, Container, Row } from "sveltestrap";
    import ParticlesAuth from "../../ParticlesAuth.svelte";

    //import images
    import logoLight from "../../../../assets/images/logo-light.png";
</script>

<svelte:head>
    <title>Log Out | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
        <ParticlesAuth>
            <div class="auth-page-content">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div class="text-center mt-sm-5 mb-4 text-white-50">
                                <div>
                                    <Link
                                        href="/dashboard"
                                        class="d-inline-block auth-logo"
                                    >
                                        <img
                                            src={logoLight}
                                            alt=""
                                            height="20"
                                        />
                                    </Link>
                                </div>
                                <p class="mt-3 fs-15 fw-semibold">
                                    Premium Admin & Dashboard Template
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row class="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card class="mt-4">
                                <CardBody class="p-4 text-center">
                                    <lord-icon
                                        src="//cdn.lordicon.com/hzomhqxz.json"
                                        trigger="loop"
                                        colors="primary:#405189,secondary:#08a88a"
                                        style="width: 180px; height: 180px"
                                    />

                                    <div class="mt-4 pt-2">
                                        <h4>You are Logged Out</h4>
                                        <p class="text-muted">
                                            Thank you for using <span
                                                class="fw-bold">velzon</span
                                            > admin template
                                        </p>
                                        <div class="mt-4">
                                            <Link
                                                href="/authenticationInner/login/auth-signin-basic"
                                                class="btn btn-success w-100"
                                                >Sign In</Link
                                            >
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </ParticlesAuth>