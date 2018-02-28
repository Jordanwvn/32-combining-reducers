import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../../lib/utils.js'
import CategoryForm from '../category-form/category-form.js'
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions.js'
import {expenseCreate} from '../../../actions/expense-actions.js'
import ExpenseForm from '../../expense/expense-form/expense-form.js';
import ExpenseItem from '../../expense/expense-item/expense-item.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // category: this.props.category ? this.props.category : undefined,
      expenses: this.props.expenses
      updating: false,
    }
  }
  render() {
    return (
      <section>
        <div
          key={this.props.category._id}
          onDoubleClick={() => this.setState({updating: !this.state.updating})}>
          <h3>{this.props.category.title}</h3>
          <p>${this.props.category.budget}</p>
          <ExpenseForm
            categoryID={this.props.category._id}
            buttonText="create"
            onComplete={this.props.ExpenseItemCreate}
          <ul>
            {}
          </ul>
        </div>
        {renderIf(this.state.updating,
          <CategoryForm
            category={this.props.category}
            buttonText='update'
            onComplete={this.props.categoryItemUpdate}/>
        )}
        <button onClick={() => this.props.categoryItemDelete(this.props.category)}>Delete</button>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemDelete: category => dispatch(categoryDelete(category)),
  expenseItemCreate: expense => dispatch(expenseCreate(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
