<script>
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		Row
	} from "sveltestrap";
	import LineChart from "./LineChart.svelte";
	import BarChart from "./BarChart.svelte";
	import PieChart from "./PieChart.svelte";
	import DonutChart from "./DonutChart.svelte";
	import PolarChart from "./PolarChart.svelte";
	import RadarChart from "./RadarChart.svelte";

	import BreadCrumb from "../../../Components/Common/BreadCrumb.svelte";
</script>

<svelte:head>
	<title>ChartJs | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Charts Js" pageTitle="Charts" />
		<Row>
			<Col xl={6}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Line Chart</h4>
					</CardHeader>
						<CardBody>
						<LineChart dataColors={["--vz-primary-rgb, 0.2", "--vz-primary", "--vz-success-rgb, 0.2", "--vz-success"]} />
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Bar Chart</h4>
					</CardHeader>
						<CardBody>
						<BarChart dataColors={["--vz-primary-rgb, 0.8","--vz-primary-rgb, 0.9"]} />
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={6}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Pie Chart</h4>
					</CardHeader>
						<CardBody>
						<PieChart dataColors={["--vz-success", "--vz-light"]} />
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Donut Chart</h4>
					</CardHeader>
						<CardBody>
						<DonutChart dataColors={["--vz-primary", "--vz-light"]} />
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={6}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Polar Chart</h4>
					</CardHeader>
						<CardBody>
						<PolarChart dataColors={["--vz-danger","--vz-success","--vz-warning","--vz-primary"]}/>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0">Radar Chart</h4>
					</CardHeader>
						<CardBody>
						<RadarChart dataColors={["--vz-success-rgb, 0.2","--vz-success","--vz-primary-rgb, 0.2","--vz-primary"]}/>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
