class LocationSerializer < ActiveModel::Serializer
  attributes :name, :parent_id, :created_at
end
