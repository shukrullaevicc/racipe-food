import { useEffect, useState } from "react"
import { Table, Popconfirm, message, Button } from 'antd';
import axios from "../../api/index";
import { useDispatch } from "react-redux";

const Recipes = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });


  useEffect(() => {
    const loadData = async () => {
      try{
        setLoading(true);
        const response = await axios("/recipes");
        setRecipes(response.data.recipes);
      }
      catch(error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      };
    }
    loadData();
  }, [])

  const confirm = (data) => {
    dispatch({type: "FAVORITE_RECIPES", recepes: data});
    message.success('Click on Yes');
  };
  
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Cuisine',
      dataIndex: 'cuisine',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image) => <img src={image} alt="" width={50} height={50}/>
    },
    {
      title: 'Action',
      render: (data) => <>
      <Popconfirm
        title="Are you sure?"
        description="Are you sure you want to add this recipe to your favourite?"
        onConfirm={() => confirm(data)}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">Favourite</Button>
      </Popconfirm>
      </>
    }
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };


  return (
    <div>
      <Table columns={columns} dataSource={recipes.map((recipe) => ({...recipe, key: recipe.id}))} pagination={tableParams.pagination} loading={loading} onChange={handleTableChange}/>
    </div>
  )
}

export default Recipes