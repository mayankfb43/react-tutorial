import { createSlice, current } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from './../../app/axios'


const initialState = {
  value: 1,
  users: {
    address: {
      country: "india",
      contact: {
        mobile: 121,
        email: 'test@gmail.com',
        arr: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    }
  },
  users2: [],
}

export const fetchUsers = createAsyncThunk(
  'counter/fetchUsers',
  async ({count}, { rejectWithValue }) => {
    try {
     
      const response = await Axios.getInstance().get(`/${count}`, {triggerUSDODInterceptor: true});
      if(count > 5 || count < 1 )
      return rejectWithValue(response.data);

      return response.data;
    } catch(err) {
      return rejectWithValue(err.payload)
    }
  },
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      
      

    },
    decrement: (state) => {
      console.log(current(state))
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.users.address.contact.email = "newemail@gmail.com";
      state.value += action.payload.amount;
      if(state.value % 2 === 0) {
        state.users.address.contact.arr = state.users.address.contact.arr.map((num) => { return num % 2 === 0 ? 'even' : 'odd' })
      } else {
        state.users.address.contact.arr = state.users.address.contact.arr.map((num, index) => { return index + 1 })
      }
        
        
    },
    resetUser: (state,action) => {
      //state.users2.title = 'reset user title'
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users2 = action.payload;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log(action.payload);
      // Add user to the state array
      //state.users = {title: "user N/A"} 
      state.users2 = {title : 'Id > 5'}
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetUser } = counterSlice.actions;
export default counterSlice.reducer