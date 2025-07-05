import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchProducts } from '../../redux/slices/searchSlice';
import { useFormik } from 'formik';

export default function FormSearch() {
    let { searchProducts } = useSelector((store) => store.searchReducer);
    const dispatch = useDispatch();
      function getSearch(value) {
        dispatch(setSearchProducts(value));
      }
      let formik = useFormik({
        initialValues: {
          search: ""
        },
        validate: getSearch,
      });
      useEffect(() => {
        formik.setFieldValue("search", "");
      }, [location]);
    
  return <>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
          <div className="relative">
              <input
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.search}
                  type="text"
                  name='search'
                  className="block w-full px-4 py-4 outline-0 text-sm text-gray-900 border rounded-sm bg-[#F3F4F7] placeholder:text-sm" placeholder="Search for Products, fruit, meat, eggs .etc..." required />
              <button type="submit" className="absolute end-0 bottom-0 top-0 focus:ring-4 focus:outline-none text-[#3E445A] font-medium rounded-lg text-lg px-4">
                  <i className="fa-solid fa-magnifying-glass"></i>
              </button>
          </div>
      </form>
  </>
}
