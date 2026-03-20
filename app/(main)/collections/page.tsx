import React from 'react';
import { getAllProducts } from '@/actions/server/Product';
import { ClientCollectionsPage } from '@/components/collections/client-collections-page';

const CollectionsPage = async () => {
    const products = await getAllProducts();

    return <ClientCollectionsPage initialProducts={products} />;
};

export default CollectionsPage;