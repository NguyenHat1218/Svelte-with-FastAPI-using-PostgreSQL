<script>
	import {
		CardBody,
		Row,
		Col,
		Card,
		CardHeader,
		Container,
	} from "sveltestrap";
	import BreadCrumb from "../../../Components/Common/BreadCrumb.svelte";
	import Link from "svelte-link";
	import { browser } from "$app/environment";
	import logodark from "../../../assets/images/logo-dark.png";
	import logolight from "../../../assets/images/logo-light.png";
	const printInvoice = () => {
		if (browser) {
			window.print();
		}
	};
</script>

<svelte:head>
	<title>Invoice Details | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Invoice Details" pageTitle="Invoices" />

		<Row class="justify-content-center">
			<Col xxl={9}>
				<Card id="demo">
					<CardHeader class="border-bottom-dashed p-4">
						<div class="d-sm-flex">
							<div class="flex-grow-1">
								<img
									src={logodark}
									class="card-logo card-logo-dark"
									alt="logo dark"
									height="17"
								/>
								<img
									src={logolight}
									class="card-logo card-logo-light"
									alt="logo light"
									height="17"
								/>
								<div class="mt-sm-5 mt-4">
									<h6
										class="text-muted text-uppercase fw-semibold"
									>
										Address
									</h6>
									<p
										class="text-muted mb-1"
										id="address-details"
									>
										California, United States
									</p>
									<p class="text-muted mb-0" id="zip-code">
										<span>Zip-code:</span> 90201
									</p>
								</div>
							</div>
							<div class="flex-shrink-0 mt-sm-0 mt-3">
								<h6>
									<span class="text-muted fw-normal"
										>Legal Registration No:</span
									>
									<span id="legal-register-no">987654</span>
								</h6>
								<h6>
									<span class="text-muted fw-normal"
										>Email:</span
									>
									<span id="email"
										>velzon@themesbrand.com</span
									>
								</h6>
								<h6>
									<span class="text-muted fw-normal"
										>Website:</span
									>
									<a
										href="/themesbrand.com/"
										class="link-primary"
										target="_blank"
										id="website">www.themesbrand.com</a
									>
								</h6>
								<h6 class="mb-0">
									<span class="text-muted fw-normal"
										>Contact No:
									</span><span id="contact-no">
										+(01) 234 6789</span
									>
								</h6>
							</div>
						</div>
					</CardHeader>
					<!--end card-header-->
					<CardBody class="p-4">
						<Row class="g-3">
							<Col xs={6} lg={3}>
								<p
									class="text-muted mb-2 text-uppercase fw-semibold"
								>
									Invoice No
								</p>
								<h5 class="fs-15 mb-0">
									#VL<span id="invoice-no">25000355</span>
								</h5>
							</Col>
							<!--end col-->
							<Col xs={6} lg={3}>
								<p
									class="text-muted mb-2 text-uppercase fw-semibold"
								>
									Date
								</p>
								<h5 class="fs-15 mb-0">
									<span id="invoice-date">23 Nov, 2021</span>
									<small class="text-muted" id="invoice-time"
										>02:36PM</small
									>
								</h5>
							</Col>
							<!--end col-->
							<Col xs={6} lg={3}>
								<p
									class="text-muted mb-2 text-uppercase fw-semibold"
								>
									Payment Status
								</p>
								<span
									class="badge bg-success-subtle text-success fs-11"
									id="payment-status">Paid</span
								>
							</Col>
							<!--end col-->
							<Col xs={6} lg={3}>
								<p
									class="text-muted mb-2 text-uppercase fw-semibold"
								>
									Total Amount
								</p>
								<h5 class="fs-15 mb-0">
									$<span id="total-amount">415.96</span>
								</h5>
							</Col>
							<!--end col-->
						</Row>
						<!--end row-->
					</CardBody>
					<!--end card-body-->
					<CardBody class="p-4 border-top border-top-dashed">
						<Row class="g-3">
							<Col sm={6}>
								<h6
									class="text-muted text-uppercase fw-semibold mb-3"
								>
									Billing Address
								</h6>
								<p class="fw-medium mb-2" id="billing-name">
									David Nichols
								</p>
								<p
									class="text-muted mb-1"
									id="billing-address-line-1"
								>
									305 S San Gabriel Blvd
								</p>
								<p class="text-muted mb-1">
									<span>Phone: +</span><span
										id="billing-phone-no"
										>(123) 456-7890</span
									>
								</p>
								<p class="text-muted mb-0">
									<span>Tax: </span><span id="billing-tax-no"
										>12-3456789</span
									>
								</p>
							</Col>
							<!--end col-->
							<Col sm={6}>
								<h6
									class="text-muted text-uppercase fw-semibold mb-3"
								>
									Shipping Address
								</h6>
								<p class="fw-medium mb-2" id="shipping-name">
									David Nichols
								</p>
								<p
									class="text-muted mb-1"
									id="shipping-address-line-1"
								>
									305 S San Gabriel Blvd
								</p>
								<p class="text-muted mb-1">
									<span>Phone: +</span><span
										id="shipping-phone-no"
										>(123) 456-7890</span
									>
								</p>
							</Col>
							<!--end col-->
						</Row>
						<!--end row-->
					</CardBody>
					<!--end card-body-->
					<CardBody class="p-4">
						<div class="table-responsive">
							<table
								class="table table-borderless text-center table-nowrap align-middle mb-0"
							>
								<thead>
									<tr class="table-active">
										<th scope="col" style="width: 50px;"
											>#</th
										>
										<th scope="col">Product Details</th>
										<th scope="col">Rate</th>
										<th scope="col">Quantity</th>
										<th scope="col" class="text-end"
											>Amount</th
										>
									</tr>
								</thead>
								<tbody id="products-list">
									<tr>
										<th scope="row">01</th>
										<td class="text-start">
											<span class="fw-semibold"
												>Sweatshirt for Men (Pink)</span
											>
											<p class="text-muted mb-0">
												Graphic Print Men & Women
												Sweatshirt
											</p>
										</td>
										<td>$119.99</td>
										<td>02</td>
										<td class="text-end">$239.98</td>
									</tr>
									<tr>
										<th scope="row">02</th>
										<td class="text-start">
											<span class="fw-semibold"
												>Noise NoiseFit Endure Smart
												Watch</span
											>
											<p class="text-muted mb-0">
												32.5mm (1.28 Inch) TFT Color
												Touch Display
											</p>
										</td>
										<td>$94.99</td>
										<td>01</td>
										<td class="text-end">$94.99</td>
									</tr>
									<tr>
										<th scope="row">03</th>
										<td class="text-start">
											<span class="fw-semibold"
												>350 ml Glass Grocery Container</span
											>
											<p class="text-muted mb-0">
												Glass Grocery Container (Pack of
												3, White)
											</p>
										</td>
										<td>$24.99</td>
										<td>01</td>
										<td class="text-end">$24.99</td>
									</tr>
									<tr>
										<th scope="row">04</th>
										<td class="text-start">
											<span class="fw-semibold"
												>Fabric Dual Tone Living Room
												Chair</span
											>
											<p class="text-muted mb-0">
												Chair (White)
											</p>
										</td>
										<td>$340.00</td>
										<td>01</td>
										<td class="text-end">$340.00</td>
									</tr>
								</tbody>
							</table>
							<!--end table-->
						</div>
						<div class="border-top border-top-dashed mt-2">
							<table
								class="table table-borderless table-nowrap align-middle mb-0 ms-auto"
								style="width:250px"
							>
								<tbody>
									<tr>
										<td>Sub Total</td>
										<td class="text-end">$699.96</td>
									</tr>
									<tr>
										<td>Estimated Tax (12.5%)</td>
										<td class="text-end">$44.99</td>
									</tr>
									<tr>
										<td
											>Discount <small class="text-muted"
												>(VELZON15)</small
											></td
										>
										<td class="text-end">- $53.99</td>
									</tr>
									<tr>
										<td>Shipping Charge</td>
										<td class="text-end">$65.00</td>
									</tr>
									<tr
										class="border-top border-top-dashed fs-15"
									>
										<th scope="row">Total Amount</th>
										<th class="text-end">$755.96</th>
									</tr>
								</tbody>
							</table>
							<!--end table-->
						</div>
						<div class="mt-3">
							<h6
								class="text-muted text-uppercase fw-semibold mb-3"
							>
								Payment Details:
							</h6>
							<p class="text-muted mb-1">
								Payment Method: <span
									class="fw-medium"
									id="payment-method">Mastercard</span
								>
							</p>
							<p class="text-muted mb-1">
								Card Holder: <span
									class="fw-medium"
									id="card-holder-name">David Nichols</span
								>
							</p>
							<p class="text-muted mb-1">
								Card Number: <span
									class="fw-medium"
									id="card-number">xxx xxxx xxxx 1234</span
								>
							</p>
							<p class="text-muted">
								Total Amount: <span class="fw-medium" id=""
									>$
								</span><span id="card-total-amount">755.96</span
								>
							</p>
						</div>
						<div class="mt-4">
							<div class="alert alert-info">
								<p class="mb-0">
									<span class="fw-semibold">NOTES:</span>
									<span id="note"
										>All accounts are to be paid within 7
										days from receipt of invoice. To be paid
										by cheque or credit card or direct
										payment online. If account is not paid
										within 7 days the credits details
										supplied as confirmation of work
										undertaken will be charged the agreed
										quoted fee noted above.
									</span>
								</p>
							</div>
						</div>
						<div
							class="hstack gap-2 justify-content-end d-print-none mt-4"
						>
							<button
								type="submit"
								on:click={printInvoice}
								class="btn btn-info"
								><i class="ri-printer-line align-bottom me-1" />
								Print</button
							>
							<Link href={null} class="btn btn-primary"
								><i
									class="ri-download-2-line align-bottom me-1"
								/> Download</Link
							>
						</div>
					</CardBody>
					<!--end card-body-->
				</Card>
				<!--end card-->
			</Col>
			<!--end col-->
		</Row>
	</Container>
</div>
