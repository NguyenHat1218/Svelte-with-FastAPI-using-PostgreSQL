<svelte:head>
	<title>Checkout | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import {
		Container,
		Form,
		Row,
		Col,
		Card,
		CardBody,
		CardHeader,
		Nav,
		NavItem,
		NavLink,
		TabContent,
		TabPane,
		Label,
		Input,
		Button,
		Table
	} from 'sveltestrap';
	import BreadCrumb from '../../../Components/Common/BreadCrumb.svelte';
	import Link from 'svelte-link';
	import Select from 'svelte-select';
	import { LockIcon } from 'svelte-feather-icons';
	import Modal from "../../../Components/Common/Modal.svelte";

	import img8 from '../../../assets/images/products/img-8.png'
	import img7 from '../../../assets/images/products/img-7.png'
	import img3 from '../../../assets/images/products/img-3.png'

	const productState = [
		{ label: 'Select State...', value: 'Select State' },
		{ label: 'Alabama', value: 'Alabama' },
		{ label: 'Alaska', value: 'Alaska' },
		{ label: 'American Samoa', value: 'American Samoa' },
		{ label: 'California', value: 'California' },
		{ label: 'Colorado', value: 'Colorado' },
		{ label: 'District Of Columbia', value: 'District Of Columbia' },
		{ label: 'Florida', value: 'Florida' },
		{ label: 'Georgia', value: 'Georgia' },
		{ label: 'Guam', value: 'Guam' },
		{ label: 'Hawaii', value: 'Hawaii' },
		{ label: 'Idaho', value: 'Idaho' },
		{ label: 'Kansas', value: 'Kansas' },
		{ label: 'Louisiana', value: 'Louisiana' },
		{ label: 'Montana', value: 'Montana' },
		{ label: 'Nevada', value: 'Nevada' },
		{ label: 'New Jersey', value: 'New Jersey' },
		{ label: 'New Mexico', value: 'New Mexico' },
		{ label: 'New York', value: 'New York' }
	];

	const productCountry = [
		{ label: 'Select Country...', value: 'Select Country' },
		{ label: 'United States', value: 'United States' }
	];

	let checkoutTab = 1;
	let val="sh1";

	let deletemodalopen = false;
	const toggledeletemodal = () => (deletemodalopen = !deletemodalopen);

	let showAddressModal = false;
    const AddressModalToggle = () => (showAddressModal = !showAddressModal);
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Checkout" pageTitle="Ecommerce" />

		<Row>
			<Col xl={8}>
			<Card>
				<CardBody class="checkout-tab">
					<Form action="#">
						<div class="step-arrow-nav mt-n3 mx-n3 mb-3">
							<Nav pills class="nav-justified custom-nav" role="tablist">
								<NavItem role="presentation">
									<NavLink class={checkoutTab <=4 && checkoutTab>= 0 ? 'fs-15 p-3 done' : 'fs-15 p-3'}
										id="pills-bill-info-tab"
										on:click={() => (checkoutTab = 1)}
										active={checkoutTab == 1}
										><i
											class="ri-user-2-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2" />
										Personal Info</NavLink>
								</NavItem>
								<NavItem role="presentation">
									<NavLink class={checkoutTab <=4 && checkoutTab> 1 ? 'fs-15 p-3 done' : 'fs-15 p-3'}
										id="pills-bill-address-tab"
										on:click={() => (checkoutTab = 2)}
										active={checkoutTab == 2}
										><i
											class="ri-truck-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2" />
										Shipping Info</NavLink>
								</NavItem>
								<NavItem role="presentation">
									<NavLink class={checkoutTab <=4 && checkoutTab> 2 ? 'fs-15 p-3 done' : 'fs-15 p-3'}
										id="pills-payment-tab"
										on:click={() => (checkoutTab = 3)}
										active={checkoutTab == 3}
										><i
											class="ri-bank-card-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2" />
										Payment Info</NavLink>
								</NavItem>
								<NavItem role="presentation">
									<NavLink class={checkoutTab <=4 && checkoutTab> 3 ? 'fs-15 p-3 done' : 'fs-15 p-3'}
										id="pills-finish-tab"
										on:click={() => (checkoutTab = 4)}
										active={checkoutTab == 4}
										><i
											class="ri-checkbox-circle-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2" />Finish
									</NavLink>
								</NavItem>
							</Nav>
						</div>

						<TabContent>
							<TabPane id="pills-bill-info" tabId={1} class={checkoutTab==1 ? 'active' : '' }>
								<div>
									<h5 class="mb-1">Billing Information</h5>
									<p class="text-muted mb-4">Please fill all information below</p>
								</div>

								<div>
									<Row>
										<Col sm={6}>
										<div class="mb-3">
											<Label for="billinginfo-firstName" class="form-label">First Name</Label>
											<Input type="text" class="form-control" id="billinginfo-firstName"
												placeholder="Enter first name" value="" />
										</div>
										</Col>

										<Col sm={6}>
										<div class="mb-3">
											<Label for="billinginfo-lastName" class="form-label">Last Name</Label>
											<Input type="text" class="form-control" id="billinginfo-lastName"
												placeholder="Enter last name" value="" />
										</div>
										</Col>
									</Row>

									<Row>
										<Col sm={6}>
										<div class="mb-3">
											<Label for="billinginfo-email" class="form-label">Email
												<span class="text-muted">(Optional)</span></Label>
											<Input type="email" class="form-control" id="billinginfo-email"
												placeholder="Enter email" />
										</div>
										</Col>

										<Col sm={6}>
										<div class="mb-3">
											<Label for="billinginfo-phone" class="form-label">Phone</Label>
											<Input type="text" class="form-control" id="billinginfo-phone"
												placeholder="Enter phone no." />
										</div>
										</Col>
									</Row>

									<div class="mb-3">
										<Label for="billinginfo-address" class="form-label">Address</Label>
										<Input type="textarea" class="form-control" id="billinginfo-address"
											placeholder="Enter address" rows="3" />
									</div>

									<Row>
										<Col md={4}>
										<div class="mb-3">
											<Label for="country" class="form-label">Country</Label>
											<Select class="form-select" id="country" items={productCountry} />
										</div>
										</Col>

										<Col md={4}>
										<div class="mb-3">
											<Label for="state" class="form-label">State</Label>
											<Select class="form-select" id="state" items={productState} />
										</div>
										</Col>

										<Col md={4}>
										<div class="mb-3">
											<Label for="zip" class="form-label">Zip Code</Label>
											<Input type="text" class="form-control" id="zip"
												placeholder="Enter zip code" />
										</div>
										</Col>
									</Row>

									<div class="d-flex align-items-start gap-3 mt-3">
										<Button color="primary" class="btn-label right ms-auto nexttab"
											data-nexttab="pills-bill-address-tab" on:click={()=> (checkoutTab = 2)}
											><i class="ri-truck-line label-icon align-middle fs-16 ms-2" />Proceed to
											Shipping</Button>
									</div>
								</div>
							</TabPane>
							<!-- end tab pane -->

							<TabPane id="pills-bill-address" tabId={2} class={checkoutTab==2 ? 'active' : '' }>
								<div>
									<h5 class="mb-1">Shipping Information</h5>
									<p class="text-muted mb-4">Please fill all information below</p>
								</div>

								<div class="mt-4">
									<div class="d-flex align-items-center mb-2">
										<div class="flex-grow-1">
											<h5 class="fs-14 mb-0">Saved Address</h5>
										</div>
										<div class="flex-shrink-0">
											<!-- Button trigger modal -->
											<Button color="success" class="btn-sm mb-3" on:click={AddressModalToggle}>
												Add Address
											</Button>
										</div>
									</div>
									<Row class="gy-3">
										<Col lg={4} sm={6}>
										<div class="form-check card-radio">
											<input type="radio" name="shippingAddress" id="shippingAddress01" class="form-check-input" checked>
											<Label class="form-check-label" for="shippingAddress01">
												<span class="mb-4 fw-semibold d-block text-muted text-uppercase">Home
													Address</span>
													
													<span class="fs-14 mb-2 d-block">Marcus Alfaro</span>
													<span class="text-muted fw-normal text-wrap mb-1 d-block">4739 Bubby
														Drive Austin, TX 78729</span>
														<span class="text-muted fw-normal d-block">Mo. 012-345-6789</span>
													</Label>
										</div>
										<div class="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
											<div>
												<Link href="{null}" class="d-block text-body p-1 px-2"
													on:click={AddressModalToggle}><i
													class="ri-pencil-fill text-muted align-bottom me-1" />
												Edit</Link>
											</div>
											<div>
												<Link href="{null}" class="d-block text-body p-1 px-2"
													on:click={toggledeletemodal}><i
													class="ri-delete-bin-fill text-muted align-bottom me-1" />
												Remove</Link>
											</div>
										</div>
										</Col>
										<Col lg={4} sm={6}>
										<div class="form-check card-radio">
											<input type="radio" name="shippingAddress" id="shippingAddress02" class="form-check-input">
											<Label class="form-check-label" for="shippingAddress02">
												<span class="mb-4 fw-semibold d-block text-muted text-uppercase">Office
													Address</span>

												<span class="fs-14 mb-2 d-block">James Honda</span>
												<span class="text-muted fw-normal text-wrap mb-1 d-block">1246 Virgil
													Street Pensacola, FL 32501
												</span>
												<span class="text-muted fw-normal d-block">Mo. 012-345-6789</span>
											</Label>
										</div>
										<div class="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
											<div>
												<Link href="{null}" class="d-block text-body p-1 px-2" on:click={AddressModalToggle}><i
													class="ri-pencil-fill text-muted align-bottom me-1" />
												Edit</Link>
											</div>
											<div>
												<Link href="{null}" class="d-block text-body p-1 px-2" on:click={toggledeletemodal}><i
													class="ri-delete-bin-fill text-muted align-bottom me-1" />
												Remove</Link>
											</div>
										</div>
										</Col>
									</Row>

									<div class="mt-4">
										<h5 class="fs-14 mb-3">Shipping Method</h5>

										<Row class="g-4">
											<Col lg={6}>
											<div class="form-check card-radio">
												<input id="shippingMethod01" name="shippingMethod" type="radio"
													class="form-check-input" checked/>
												<label class="form-check-label" for="shippingMethod01">
													<span
														class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">Free</span>
													<span class="fs-14 mb-1 text-wrap d-block">Free Delivery</span>
													<span class="text-muted fw-normal text-wrap d-block">Expected
														Delivery 3 to 5 Days</span>
												</label>
											</div>
											</Col>
											<Col lg={6}>
											<div class="form-check card-radio">
												<input id="shippingMethod02" name="shippingMethod" type="radio"
													class="form-check-input" />
												<Label class="form-check-label" for="shippingMethod02">
													<span
														class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">$24.99</span>
													<span class="fs-14 mb-1 text-wrap d-block">Express Delivery</span>
													<span class="text-muted fw-normal text-wrap d-block">Delivery within
														24hrs.</span>
												</Label>
											</div>
											</Col>
										</Row>
									</div>
								</div>

								<div class="d-flex align-items-start gap-3 mt-4">
									<Button color="light" class="btn-label previestab"
										data-previous="pills-bill-info-tab" on:click={()=> (checkoutTab = 1)}
										><i class="ri-arrow-left-line label-icon align-middle fs-16 me-2" />Back to
										Personal Info</Button>
									<Button color="primary" class="btn-label right ms-auto nexttab"
										data-nexttab="pills-payment-tab" on:click={()=> (checkoutTab = 3)}
										><i class="ri-bank-card-line label-icon align-middle fs-16 ms-2" />Continue to
										Payment</Button>
								</div>
							</TabPane>
							<!-- end tab pane -->

							<TabPane id="pills-payment" tabId={3} class={checkoutTab==3 ? 'active' : '' }>
								<div>
									<h5 class="mb-1">Payment Selection</h5>
									<p class="text-muted mb-4">Please select and enter your billing information</p>
								</div>

								<Row class="g-4">
									<Col lg={4} sm={6}>
									<div>
										<div class="form-check card-radio">
											<input id="paymentMethod01" name="paymentMethod" type="radio"
												class="form-check-input" />
											<Label class="form-check-label" for="paymentMethod01">
												<span class="fs-16 text-muted me-2"><i
														class="ri-paypal-fill align-bottom" /></span>
												<span class="fs-14 text-wrap">Paypal</span>
											</Label>
										</div>
									</div>
									</Col>
									<Col lg={4} sm={6}>
									<div>
										<div class="form-check card-radio">
											<input id="paymentMethod02" name="paymentMethod" type="radio"
												class="form-check-input" checked />
											<Label class="form-check-label" for="paymentMethod02">
												<span class="fs-16 text-muted me-2"><i
														class="ri-bank-card-fill align-bottom" /></span>
												<span class="fs-14 text-wrap">Credit / Debit Card</span>
											</Label>
										</div>
									</div>
									</Col>

									<Col lg={4} sm={6}>
									<div>
										<div class="form-check card-radio">
											<input id="paymentMethod03" name="paymentMethod" type="radio"
												class="form-check-input" />
											<Label class="form-check-label" for="paymentMethod03">
												<span class="fs-16 text-muted me-2"><i
														class="ri-money-dollar-box-fill align-bottom" /></span>
												<span class="fs-14 text-wrap">Cash on Delivery</span>
											</Label>
										</div>
									</div>
									</Col>
								</Row>

								<div id="paymentmethodCollapse">
									<Card class="p-4 border shadow-none mb-0 mt-4">
										<Row class="gy-3">
											<Col md={12}>
											<Label for="cc-name" class="form-label">Name on card</Label>
											<Input type="text" class="form-control" id="cc-name"
												placeholder="Enter name" />
											<small class="text-muted">Full name as displayed on card</small>
											</Col>

											<Col md={6}>
											<Label for="cc-number" class="form-label">Credit card number</Label>
											<Input type="text" class="form-control" id="cc-number"
												placeholder="xxxx xxxx xxxx xxxx" />
											</Col>

											<Col md={3}>
											<Label for="cc-expiration" class="form-label">Expiration</Label>
											<Input type="text" class="form-control" id="cc-expiration"
												placeholder="MM/YY" />
											</Col>

											<Col md={3}>
											<Label for="cc-cvv" class="form-label">CVV</Label>
											<Input type="text" class="form-control" id="cc-cvv" placeholder="xxx" />
											</Col>
										</Row>
									</Card>
									<div class="text-muted mt-2 fst-italic">
										<LockIcon class="text-muted icon-xs"/> Your transaction is secured
										with SSL encryption
									</div>
								</div>

								<div class="d-flex align-items-start gap-3 mt-4">
									<Button color="light" class="btn-label previestab"
										data-previous="pills-bill-address-tab" on:click={()=> (checkoutTab = 2)}
										><i class="ri-arrow-left-line label-icon align-middle fs-16 me-2" />Back to
										Shipping</Button>
									<Button color="primary" class="btn-label right ms-auto nexttab"
										data-nexttab="pills-finish-tab" on:click={()=> (checkoutTab = 4)}
										><i
											class="ri-shopping-basket-line label-icon align-middle fs-16 ms-2" />Complete
										Order</Button>
								</div>
							</TabPane>
							<!-- end tab pane -->

							<TabPane id="pills-finish" tabId={4} class={checkoutTab==4 ? 'active' : '' }>
								<div class="text-center py-5">
									<div class="mb-4">
										<lord-icon src="//cdn.lordicon.com/lupuorrc.json" trigger="loop"
											colors="primary:#0ab39c,secondary:#405189"
											style="width:120px;height:120px" />
									</div>
									<h5>Thank you ! Your Order is Completed !</h5>
									<p class="text-muted">
										You will receive an order confirmation email with details of your order.
									</p>

									<h3 class="fw-semibold">
										Order ID:
										<Link href="/ecommerce/apps-ecommerce-order-details"
											class="text-decoration-underline">VZ2451</Link>
									</h3>
								</div>
							</TabPane>
							<!-- end tab pane -->
						</TabContent>
						<!-- end tab content -->
					</Form>
				</CardBody>
				<!-- end card body -->
			</Card>
			<!-- end card -->
			</Col>
			<!-- end col -->

			<Col xl={4}>
			<Card>
				<CardHeader>
					<div class="d-flex">
						<div class="flex-grow-1">
							<h5 class="card-title mb-0">Order Summary</h5>
						</div>
					</div>
				</CardHeader>
				<CardBody>
					<div class="table-responsive table-card">
						<Table class="table table-borderless align-middle mb-0">
							<thead class="table-light text-muted">
								<tr>
									<th style="width: 90px;" scope="col">Product</th>
									<th scope="col">Product Info</th>
									<th scope="col" class="text-end">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="avatar-md bg-light rounded p-1">
											<img src={img8} alt="" class="img-fluid d-block" />
										</div>
									</td>
									<td>
										<h5 class="fs-14">
											<Link href="/ecommerce/apps-ecommerce-product-details" class="text-dark">
											Sweatshirt for Men (Pink)</Link>
										</h5>
										<p class="text-muted mb-0">$ 119.99 x 2</p>
									</td>
									<td class="text-end">$ 239.98</td>
								</tr>
								<tr>
									<td>
										<div class="avatar-md bg-light rounded p-1">
											<img src={img7} alt="" class="img-fluid d-block" />
										</div>
									</td>
									<td>
										<h5 class="fs-14">
											<Link href="/ecommerce/apps-ecommerce-product-details" class="text-dark">
											Noise Evolve Smartwatch</Link>
										</h5>
										<p class="text-muted mb-0">$ 94.99 x 1</p>
									</td>
									<td class="text-end">$ 94.99</td>
								</tr>
								<tr>
									<td>
										<div class="avatar-md bg-light rounded p-1">
											<img src={img3} alt="" class="img-fluid d-block" />
										</div>
									</td>
									<td>
										<h5 class="fs-14">
											<Link href="/ecommerce/apps-ecommerce-product-details" class="text-dark">350
											ml Glass Grocery Container</Link>
										</h5>
										<p class="text-muted mb-0">$ 24.99 x 1</p>
									</td>
									<td class="text-end">$ 24.99</td>
								</tr>
								<tr>
									<td class="fw-semibold" colspan="2">Sub Total :</td>
									<td class="fw-semibold text-end">$ 359.96</td>
								</tr>
								<tr>
									<td colspan="2">Discount <span class="text-muted">(VELZON15)</span>
										:
									</td>
									<td class="text-end">- $ 50.00</td>
								</tr>
								<tr>
									<td colspan="2">Shipping Charge :</td>
									<td class="text-end">$ 24.99</td>
								</tr>
								<tr>
									<td colspan="2">Estimated Tax (12%): </td>
									<td class="text-end">$ 18.20</td>
								</tr>
								<tr class="table-active">
									<th colspan="2">Total (USD) :</th>
									<td class="text-end">
										<span class="fw-semibold"> $353.15 </span>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</CardBody>
				<!-- end card body -->
			</Card>
			<!-- end card -->
			</Col>
			<!-- end col -->
		</Row>
	</Container>
</div>

<Modal isOpen={showAddressModal} className="modal-dialog-centered">
    <div class="modal-header p-3">
        <h5 class="modal-title" >Address</h5>
        <button type="button" class="btn-close" on:click={AddressModalToggle} ></button>
    </div>
    <div class="modal-body">
        <div>
			<div class="mb-3">
				<Label for="addaddress-Name" class="form-label">Name</Label>
				<Input type="text" class="form-control" id="addaddress-Name" placeholder="Enter name" />
			</div>

			<div class="mb-3">
				<Label for="addaddress-textarea" class="form-label">Address</Label>
				<Input type="textarea" class="form-control" id="addaddress-textarea" placeholder="Enter address"
					rows="2" />
			</div>

			<div class="mb-3">
				<Label for="addaddress-Name" class="form-label">Phone</Label>
				<Input type="text" class="form-control" id="addaddress-Name" placeholder="Enter phone no." />
			</div>

			<div class="mb-3">
				<Label for="state" class="form-label">Address Type</Label>
				<select class="form-select" id="state" data-choices data-choices-search-false>
					<option value="homeAddress">Home (7am to 10pm)</option>
					<option value="officeAddress">Office (11am to 7pm)</option>
				</select>
			</div>
		</div>
    </div>
	<div class="modal-footer">
		<button type="button" class="btn btn-light" on:click={AddressModalToggle}>Close</button>
		<button type="button" class="btn btn-success" on:click={AddressModalToggle}>Save</button>
	</div>
</Modal>

<Modal isOpen={deletemodalopen} className="modal-dialog-centered">
    <div class="modal-body">
        <div class="mt-2 text-center">
			<lord-icon src="//cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548"
				style="width: 100px; height: 100px;" />
			<div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
				<h4>Are you Sure ?</h4>
				<p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Address ?</p>
			</div>
		</div>
		<div class="d-flex gap-2 justify-content-center mt-4 mb-2">
			<button type="button" class="btn w-sm btn-light" on:click={toggledeletemodal}> Close </button>
			<button type="button" class="btn w-sm btn-danger" on:click={toggledeletemodal}>
				Yes, Delete It!
			</button>
		</div>
    </div>
</Modal>