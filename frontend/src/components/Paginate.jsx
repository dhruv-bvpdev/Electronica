import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-5"
      >
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            href={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            active={x + 1 === page}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
