import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
class Product extends Component{
	render(){
		const {id, title, img, price, inCart} = this.props.product;

		return( 
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<ProductConsumer>
						{value=>(<div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
							<Link to="/details">

								<img src={img} alt="product image" className="card-img-top"/>
							</Link>
							<button className="cart-btn" 
									onClick={()=>{value.addToCart(id); value.openModal(id)}} 
									disabled={inCart?true:false}>
									{inCart?(<p className="text-capitilize mb-0" disabled>inCart</p>)
											:
											(<i className="fas fa-cart-plus"/>)}
							</button>
						</div>	)}
						

						
					</ProductConsumer>
					
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">
						{title}
						</p>
						<h5 className="text-blue font-italic mb-0">
							<span className="mr-1">
								${price}
							</span>
						</h5>

					</div>
				</div>
			</ProductWrapper>
				
			)
	}
}

Product.propTypes = {
	product:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool
	}).isRequired
}


const ProductWrapper = styled.div`
	.card{
		border-color:transparent;
		transition:all 0.35s linear;
	}

	.card-footer{
		background: transparent;
		border-top:transparent;
		transition:all 0.35s linear;

	}
	&:hover{
		.card{
			border: 0.04rem solid rgba(0,0,0,0.2);
			border-top-left-radius: 50px;
			border-top-right-radius:50px;
			box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
		}
		.card-footer{
			background: rgba(247,247,247);
		}
	}
	.img-container{
		position:relative;
		overflow:hidden;
	}

	.img-container:hover .card-img-top{
		transform:scale(1.2);
	}

	.card-img-top{
		transition: all 0.35s linear;
	}

	.cart-btn {
		position:absolute;
		bottom:0;
		right:0;
		padding:0.2rem 0.4rem;
		background: var(--lightBlue);
		border:none;
		color:var(--mainWhite);
		font-size:1.4rem;
		border-top-left-radius: 0.5rem;
		transform:translate(100%,100%);
		transition: all 0.35s linear;
	}
	.img-container:hover .cart-btn{
		transform:translate(0%,0%);
	}

	.cart-btn:hover{
		color:var(--mainBlue);
		cursor:pointer;
	}
`

export default Product;