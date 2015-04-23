require 'rails_helper'

describe Ingredient do
  it { should belong_to :category }
  it { should belong_to :location }
  it { should validate_presence_of :category_id }
end
