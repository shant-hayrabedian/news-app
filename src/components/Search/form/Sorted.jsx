import './Sorted.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { Select } from 'antd'
import { changeOrder } from '../../../redux/features/pageSlice/actionCreators';

const { Option } = Select;

const Sorted = () => {


    const [dropDownOnLabelClick, setDropDownOnLabelClick] = useState(false)

    const dispatch = useDispatch()

    const sortingRenderedArrayOnChange = (e) => {
        if (e === 'oldest') {
            dispatch(changeOrder('oldest'))
        } else {
            dispatch(changeOrder('latest'))
        }
    }


    const options = [{
        value: 'latest',
        id: 1
    }, {
        value: 'oldest',
        id: 2
    }]
    return (

        <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
            <label style={{ fontSize: 20 }} className="label2" htmlFor="sort2">Sorted by:</label>
            <Select
                onDropdownVisibleChange={() => setDropDownOnLabelClick(false)}
                onClick={(e) => {
                    !dropDownOnLabelClick ? setDropDownOnLabelClick(true) : setDropDownOnLabelClick(false);

                }}
                className='select2'
                id="sort2"
                defaultValue="latest"
                style={{ width: 170, textAlign: 'left', fontSize: 18 }}
                bordered={false}
                open={dropDownOnLabelClick}
                onChange={(e) => {
                    sortingRenderedArrayOnChange(e)

                }}
                showArrow={false}
            >
                {options.map((option) => <Option className="option" key={option.id} value={option.value}>
                    {option.value[0].toUpperCase() + option.value.slice(1)}
                </Option>
                )}

            </Select>
        </div>

    )
}

export default Sorted

