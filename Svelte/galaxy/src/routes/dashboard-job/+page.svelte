<svelte:head>
  <title>Job Dashboard | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
    import { Container, Row } from "sveltestrap";
	  import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
    import SalesByLocations from "../dashboard/SalesByLocations.svelte";
    import ApplicationsStatistic from "./ApplicationsStatistic.svelte";
    import Candidates from "./Candidates.svelte";
    import FeaturedCompanies from "./FeaturedCompanies.svelte";
    import RecentApplicants from "./RecentApplicants.svelte";
    import RecomendedJobs from "./RecomendedJobs.svelte";
    import Widgets from "./Widgets.svelte";
</script>
<div class="page-content">
    <Container fluid>
      <BreadCrumb title="Job Dashboard" pageTitle="Dashboards" />

      <Row>
        <Widgets />
        <FeaturedCompanies />
      </Row>

      <Row>
        <ApplicationsStatistic dataColors={["--vz-success", "--vz-info", "--vz-primary"]} />
        <Candidates />
      </Row>

      <Row>
        <RecomendedJobs />
      </Row>

      <Row>
        <RecentApplicants />
        <SalesByLocations />
      </Row>
    </Container>
  </div>