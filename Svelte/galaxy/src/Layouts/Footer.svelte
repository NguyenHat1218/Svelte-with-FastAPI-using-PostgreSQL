<script>
    import { Col, Container, Row } from "sveltestrap";
</script>

<footer class="footer border-top">
    <Container fluid>
        <Row>
            <Col sm={6}>
                {new Date().getFullYear()} © Velzon.
            </Col>
            <Col sm={6}>
                <div class="text-sm-end d-none d-sm-block">
                    Design & Develop by Themesbrand
                </div>
            </Col>
        </Row>
    </Container>
</footer>
